'use client';

//routing import
import {useRouter} from 'next/navigation';

//front-end imports
import React, {useState, useEffect} from 'react';
import { Button, Heading, Text, Card, Flex, Grid, Collection,
Badge, Divider, useTheme, ToggleButton,
TextAreaField} from '@aws-amplify/ui-react';
import {ImPlus} from 'react-icons/im';
import '@aws-amplify/ui-react/styles.css';

//import * as queries from '../../graphql/queries';
//import {listPostInfos} from '../../graphql/queries';
import {API, Amplify} from 'aws-amplify';
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';

import awsExports from '@/aws-exports';
import { getCurrentUser, signOut } from '@/util/auth';
Amplify.configure(awsExports);

const CommunityPage = () => {
  //holds theme
  const {tokens} = useTheme();
  const router = useRouter();
  //holds all post information
  const [post, setPost] = useState([]);

  // get current user
  const [user, setUser] = useState(false);

  //if user not set, set user
  if(!user){
      // get current user
   getCurrentUser().then((user) => {
		setUser(user);
	})
  }

  // like button functionality (press/not press)
  //const [pressLike, setPressLike] = useState(false);

  //function to set all post information to post variable
  const getAllPostInformation = async() => {
    const holdPostsResponse =  await API.graphql({
         query: queries.listPostInfos,
         authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
     });
    setPost(holdPostsResponse.data.listPostInfos.items);
    console.log(holdPostsResponse);
  };

  // get all previous post information
  useEffect(() => {
        getAllPostInformation();
  }, []);
  

  //function to delete data
  async function delete_post(id, version){
    const post_details = {
        id: id,
        _version: version
    };
    
    const delete_post_data = await API.graphql({
              query: mutations.deletePostInfo,
              variables: {input: post_details},
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
     });
     //filter out deleted post 
     setPost(post.filter(x => x.id !== id));
  }

  //function to update post likes
  async function update_post_likes(id, version, no_likes){
    var addLike = 1 + no_likes
    //currently unpressed the like button
    //if(pressLike){
      //  addLike = -1
    //}
    //post details to update
    const post_like_details = {
        id: id,
        _version: version,
        likes: addLike
    };
    
    const update_post_data = await API.graphql({
              query: mutations.updatePostInfo,
              variables: {input: post_like_details},
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
     });
     //setPressLike(!pressLike);
     getAllPostInformation();
  }

  //determine whether to show delete button
  function permission_delete(email){
      if(user != false){
          //if current user's post, then can delete their own post
          if(email == user.attributes.email){
            return true;
          }
      }
      return false;
  }

  //dynamic routing
  function pushTo(e, id){
    router.push(`/Application/CommunityPage/${id}`)    
  }
  
  // front-end
  return (
    <div>
    <Flex direction = "column" alignItems = "space-between" basis = "100%">
    <Flex direction = "row" justifyContent="space-between" basis = "100%">
      <Heading level={1} color= "blue"> Community Page</Heading>
      <Button variation = "primary" onClick={()=> router.push('/Application/PostCreationPage')}>
        <ImPlus />&nbsp;
        <Text color = "white">Post</Text>
      </Button>
      
    </Flex>
    <Flex direction="column" justifyContent = "flex-end">
      <div>
        <Collection
        type = "grid"
        templateColumns="1fr 1fr 1fr"
        templateRows="1fr"
        gap = "15px"
        items = {post}
        isSearchable
        searchPlaceholder = "Type to search by title..."
        searchFilter= {(p, keyword) => ((p).title.toLowerCase().startsWith(keyword.toLowerCase()))} 
        isPaginated
        itemsPerPage={3}>
        {((x, index) => (
            <Card variation = "elevated" 
            borderRadius="0.5rem"
            boxShadow="rgba(13, 26, 38, 0.25) 0px 4px 12px 0px"
            padding="1rem"
            key = {x.id}>


                <Flex direction = "row">
                    <Flex direction = "column" basis = "100%" gap="1rem">   
                        <Heading level = {4}>{x.title}</Heading>
                        <Text as = "span">Created By: {x.fname} {x.lname}</Text>
                        <Flex direction = "row">
                            <Badge variation = "info" size = "small">{x.tags}</Badge>
                        </Flex>
                        <Divider border={`dotted ${tokens.colors.brand.primary[100]}`} orientation = "horizontal" />
                        <TextAreaField
                            label = "desc"
                            isDisabled={true}
                            isReadOnly={true}
                            labelHidden={true}
                            placeholder={x.description}
                            rows={3}/>
                        <Flex direction = "row" basis = "100%" alignSelf = "flex-end">
                            <Button variation="primary" colorTheme = "warning" onClick = {(e) => pushTo(e, x.id)}> Comment</Button>
                            <Button size = "small" variation = "primary" colorTheme = "info" onClick={() => update_post_likes(x.id, x._version, x.likes)} >Like {x.likes}</Button>
                            {(permission_delete(x.email)) ? (<Button size = "small" variation = "primary" colorTheme = "error" onClick={() => delete_post(x.id, x._version)} >Delete</Button>): null}
                        </Flex>
                        
                    </Flex>
                    
                </Flex>
            </Card>
        ))}
        </Collection>
      </div>
      </Flex>
      </Flex>
    </div>
  );
};

export default CommunityPage;