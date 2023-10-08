'use client';

//routing import
import {useRouter} from 'next/navigation';

//front-end imports
import React, {useState, useEffect} from 'react';
import { Button, Heading, Text, Card, Flex} from '@aws-amplify/ui-react';
import {ImPlus} from 'react-icons/im';
import '@aws-amplify/ui-react/styles.css';

//backend imports
import { Amplify, Auth } from 'aws-amplify';
import awsExports from '@/aws-exports';
Amplify.configure(awsExports);
//import * as queries from '../../graphql/queries';
//import {listPostInfos} from '../../graphql/queries';
import {API} from 'aws-amplify';
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
import * as mutations from '../../graphql/mutations.js';
import * as queries from '../../graphql/queries.js';



const CommunityPage = () => {
  const router = useRouter();
  //holds all post information
  const [post, setPost] = useState([]);

  //function to set all post information to post variable
  const getAllPostInformation = async() => {
    const holdPostsResponse =  await API.graphql({
         query: queries.listPostInfos,
         authMode: GRAPHQL_AUTH_MODE.API_KEY
     });
    setPost(holdPostsResponse.data.listPostInfos.items);
    console.log(holdPostsResponse);
  };

  // get all previous post information
  useEffect(() => {
        getAllPostInformation();
  }, []);
  

  //function to delete data
  async function delete_post(ID){
    const post_details = {
        id: ID.id
    };
    
    const delete_post_data = await API.graphql({
              query: mutations.deletePostInfo,
              variables: {input: post_details},
              authMode: GRAPHQL_AUTH_MODE.API_KEY
     });
     setPost(post.filter(x => x.id !== ID.id));
  }
  const delete_button = (e) =>{
        delete_post(e);
    };
  
  // front-end
  return (
    <div>
      <Heading level={1} color= "blue"> Community Page</Heading>
      <Button variation = "primary" onClick={()=> router.push('/Application/PostCreationPage')}>
        <ImPlus />&nbsp;
        <Text color = "white">Post</Text>
      </Button>
      <div>
        {post.map(x => (
            <Card variation = "elevated" key = {x.id}>
                <Flex direction = "row" alignItems = "flex-start">
                    <Flex direction = "column" gap="1rem">    
                        <Heading level = {1}>{x.title}</Heading>
                        <Text as = "span">{x.tags}</Text>
                        <Text as = "span">{x.description}</Text>
                    </Flex>
                    <Button variation = "primary" colorTheme = "error" onClick={delete_button} >delete mE</Button>
                    <Button  variation = "primary" colorTheme = "success" onClick={delete_button} >update mE</Button>
                </Flex>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;