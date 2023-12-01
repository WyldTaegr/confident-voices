// pages/index.js
'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';
import { API, Amplify } from 'aws-amplify';
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
import '@aws-amplify/ui-react/styles.css';
import { getCurrentUser } from '@/util/auth';
import awsExports from '@/aws-exports';
Amplify.configure(awsExports);

// front-end imports
import { Button, Alert, Heading, Divider, Input, Label, Grid, TextAreaField, Head, Flex, Radio,
RadioGroupField, Card, Badge, Text , Collection, View, ScrollView,
Message} from '@aws-amplify/ui-react';


const CommentsPage = ({params}) => {

    // color switch for comments
    const bg_color = ["white","blue","purple"]

    //set current post commenting on
    const [post, setPost] = useState(false);

    // get current user
    const [user, setUser] = useState(false);

    //holds all comment information
    const [comment, setComment] = useState([]);

    // input comment
    const [inputDesc, setInputDesc] = useState("");

    //error input comment
    const [hasErrorDesc, setErrorDesc] = useState(false);

    // alerts to notify user of bad input
    const [alertDesc, setAlertDesc] = useState(false);
    //get post commenting on
    const fetchPost = async() => {
    const get_post = await API.graphql({
        query: queries.getPostInfo,
        variables: {id: params.slugma},
        authMode: GRAPHQL_AUTH_MODE.API_KEY
     });
    setPost(get_post.data.getPostInfo);
    console.log(get_post);
  };

  //function to set all comment information to comment var
  const getAllCommentInfo = async() => {
    // get all post info
    const holdCommentResponse =  await API.graphql({
         query: queries.listComments,
         authMode: GRAPHQL_AUTH_MODE.API_KEY
     });
     //filter for related comments to a particular post
     const related_comments = holdCommentResponse.data.listComments.items.filter(
          (comment) => comment.idpost === params.slugma)
     // set comments to related ones    
     setComment(related_comments);
     console.log(related_comments); //can comment out later
  };

  useEffect(() => {
        //used to get the particular post
        fetchPost();
        // get all previous comment information
        getAllCommentInfo();
  });


  //if user not set, set user
  if(!user){
    // get current user
    getCurrentUser().then((user) => {
	    setUser(user);
	})
  }
   
  // check user input on submission
  const submitCheck = async(e) => {
      //prevent default submission behavior
      //e.preventDefault();
      var descCheck = inputDesc.length == 0;
      //check descripton
      if(descCheck){
          setErrorDesc(true);
          setAlertDesc(true);
      }
      else{
          setErrorDesc(false);
          setAlertDesc(false);
      }
      
      if(descCheck == false){
          // holds new post info from user input
          const newComment = {
              description: inputDesc,
              fname: user.attributes.name,
              lname: user.attributes.family_name,
              email: user.attributes.email,
              idpost: params.slugma

          };

          // puts information to backend dB
          // creating comment
          const create_comment = await API.graphql({
          query: mutations.createComments,
          variables: {input: newComment},
          authMode: GRAPHQL_AUTH_MODE.API_KEY
          });
          // get all update comments
         
          getAllCommentInfo();
          //reset comment textbox to empty
          setInputDesc("");
      }
  };

  function concatWords(email, first, last){
      var by = "By: ";
      return(by.concat(first, " ", last, ", ", email))

  }

  //determine whether to show delete button on comment
  function permission_delete(email){
      if(user != false){
          //if current user's post, then can delete their own post
          if(email == user.attributes.email){
            return true;
          }
      }
      return false;
  }
  
  //function to delete data
  async function delete_comment(id, version){
    const comment_details = {
        id: id,
        _version: version
    };
    
    const delete_comment_data = await API.graphql({
              query: mutations.deleteComments,
              variables: {input: comment_details},
              authMode: GRAPHQL_AUTH_MODE.API_KEY
     });
     //filter out deleted post 
     //getAllCommentInfo();
     setComment(comment.filter(x => x.id !== id));
  }

  return (
      <Grid
        columnGap="0.5rem"
        templateColumns="1fr 1fr">

         <Flex direction = "column" columnStart = "1" columnEnd = "2">       
            <Flex direction = "column" basis = "100%" gap="1rem">   
                <Heading level = {4}>{post.title}</Heading>
                <Text as = "span">Created By: {post.fname} {post.lname}</Text>
                <Flex direction = "row">
                    <Badge variation = "info" size = "small">{post.tags}</Badge>
                </Flex>
                <Divider border={`dotted`} orientation = "horizontal" />
                <Text as = "span">{post.description}</Text>
            </Flex>
            <br /><br />
            {alertDesc? (<Alert variation="error" isDimissible={true} hasIcon={true}>Please enter a comment</Alert>): null}
            <TextAreaField label = "Enter a Comment Below:"
                maxLength = {250}
                rows = {5}
                placeholder = "Enter a comment (max length 250 characters) .." 
                value = {inputDesc}
                onChange = {(e) => setInputDesc(e.currentTarget.value)}
                hasError = {hasErrorDesc}/>
            <Button variation = "primary" onClick = {submitCheck}>Create Comment</Button>
        </Flex>
        <Flex direction = "column" columnStart = "2" columnEnd = "-1">
        <Heading level = {4}>Comments:</Heading>
        <Collection
        type = "grid"
        templateRows="1fr 1fr"
        gap = "15px"
        items = {comment}
        isSearchable
        searchPlaceholder = "Type to search by email..."
        searchFilter= {(p, keyword) => ((p).email.toLowerCase().startsWith(keyword.toLowerCase()))} 
        isPaginated
        itemsPerPage={2}>
            {((x, index) => (
                <Message
                variation="filled"
                isDismissible={permission_delete(x.email)}
                colorTheme="info"
                heading={concatWords(x.email, x.fname, x.lname)}
                onDismiss={() => delete_comment(x.id, x._version)}>
                {x.description}
                </Message>
               
            
            ))}
        </Collection>
        </Flex>
    </Grid>
  );
  
};


export default CommentsPage;