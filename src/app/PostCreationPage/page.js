'use client';
// imports for routing and page switching
import Link from 'next/link';
import {useRouter} from 'next/navigation';

// front-end imports
import { Amplify, Auth } from 'aws-amplify';
import React, {useState} from 'react';
import { Button, Alert, Heading, Divider, Input, Label, Grid, TextAreaField, Head, Flex } from '@aws-amplify/ui-react';
import {ImPlus} from 'react-icons/im';
import '@aws-amplify/ui-react/styles.css';


// backend imports
import {addInformation, allPostInformation} from '../Database/postDB';
import awsExports from '@/aws-exports';
Amplify.configure(awsExports);

const PostCreationPage = () => {
    
  const router = useRouter(); //used for going back to Community Page

  // to set values in the input
  const [inputTitle, setInputTitle] = useState("");
  const [inputTags, setInputTags] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  // to make input red when not valid input
  const [hasErrorTitle, setErrorTitle] = useState(false);
  const [hasErrorTags, setErrorTags] = useState(false);
  const [hasErrorDesc, setErrorDesc] = useState(false);

  // alerts to notify user of bad input
  const [alertTitle, setAlertTitle] = useState(false);
  const [alertTags, setAlertTags] = useState(false);
  const [alertDesc, setAlertDesc] = useState(false);

  // check user input on submission
  const submitCheck = (e) => {
      //prevent default submission behavior
      //e.preventDefault();
      var titleCheck = inputTitle.length == 0
      var tagsCheck = inputTags.length == 0;
      var descCheck = inputDesc.length == 0;
      //check title
      if(titleCheck){
          setErrorTitle(true);
          setAlertTitle(true);
      }
      else{
          setErrorTitle(false);
          setAlertTitle(false);
      }
      //check tags
      if(tagsCheck){
          setErrorTags(true);
          setAlertTags(true);
      }
      else{
          setErrorTags(false);
          setAlertTags(false);
      }
      //check descripton
      if(descCheck){
          setErrorDesc(true);
          setAlertDesc(true);
      }
      else{
          setErrorDesc(false);
          setAlertDesc(false);
      }
      //alert(hasErrorDesc);
      //alert(hasErrorTags);
      //alert(hasErrorTitle)
      if((titleCheck == false) && (tagsCheck == false) && (descCheck == false)){
          alert("GREAT NO ERRORS");
          alert(inputTitle);
          // holds new post info from user input
          
          const newPostInfo = {
              title: inputTitle,
              tags: inputTags,
              description: inputDesc
          };
          

          // puts information to backend dB
          addInformation(newPostInfo);
          var holdposts = allPostInformation();
          console.log(holdposts);
          /*
          const newPost = API.graphql({
              query: mutations.createPostInfo,
              variables: {input: newPostInfo},
              authMode: GRAPHQL_AUTH_MODE.API_KEY
          });
          */
         
          // go back to Community Page to see new post 
          router.push("/CommunityPage");
      }
  };
  // front end 
  return (
        <Flex as = "form" direction = "row" justifyContent = "space-evenly" alignContent = "stretch">
            <Flex direction = "column" justifyContent = "space-between">
                <Heading level={1} color= "blue"> Post Creation</Heading>
                <Flex direction = "column">
                    {alertTitle? (<Alert variation="error" isDimissible={true} hasIcon={true}>Please enter a title</Alert>): null}
                    {alertTags? (<Alert variation="error" isDimissible={true} hasIcon={true}>Please enter tags</Alert>): null}
                    {alertDesc? (<Alert variation="error" isDimissible={true} hasIcon={true}>Please enter a description</Alert>): null}
                </Flex>
            </Flex>
            
            <Divider orientation = "vertical"/>
            <Flex direction = "row">
            <Flex direction = "column" justifyContent = "center" alignContent = "center">
                <Label htmlFor = "title">Title:</Label>
                <Input id = "title"
                    variation="quiet"
                    size = "large"
                    placeholder = "Enter title .."
                    isRequired = {true}
                    value = {inputTitle}
                    hasError = {hasErrorTitle}
                    onChange = {(e) => setInputTitle(e.currentTarget.value)}/>
                <br /><br />
                <Label htmlFor = "tags">Tags/Key Words:</Label>
                <Input id = "tags"
                    variation="quiet"
                    size = "large"
                    placeholder = "Enter tags/key words .." 
                    isRequired = {true}
                    value = {inputTags}
                    onChange = {(e) => setInputTags(e.currentTarget.value)}
                    hasError = {hasErrorTags}/>
                <br /><br />
                <TextAreaField label = "Description:"
                    maxLength = {250}
                    rows = {6}
                    placeholder = "Enter a description .." 
                    isRequired = {true}
                    value = {inputDesc}
                    onChange = {(e) => setInputDesc(e.currentTarget.value)}
                    hasError = {hasErrorDesc}/>
                <Button variation = "primary" onClick = {submitCheck}>Create</Button>
            </Flex>
            </Flex>
           
      </Flex>
     
    
  );
};

export default PostCreationPage;