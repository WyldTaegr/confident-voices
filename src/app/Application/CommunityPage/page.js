'use client';

//routing import
import {useRouter} from 'next/navigation';

//front-end imports
import React, {useState, useEffect} from 'react';
import { Button, Heading, Text, Card, Flex, Grid, Collection, Badge} from '@aws-amplify/ui-react';
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
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';



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
  async function delete_post(id){
    const post_details = {
        id: id
    };
    
    const delete_post_data = await API.graphql({
              query: mutations.deletePostInfo,
              variables: {input: post_details},
              authMode: GRAPHQL_AUTH_MODE.API_KEY
     });
     setPost(post.filter(x => x.id !== id));
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
    <Flex direction="column" grow = "4" basis= "100%" justifyContent = "flex-end">
      <div>
        <Collection
        type = "list"
        items = {post}
        direction = "row"
        justify-content = "space-between"
        wrap = "wrap"
        isSearchable
        searchPlaceholder = "Type to search by title..."
        searchFilter= {(p, keyword) => ((p).title.toLowerCase().startsWith(keyword.toLowerCase()))} 
        isPaginated
        itemsPerPage={8}>
        {((x, index) => (
            <Card variation = "elevated" borderRadius="0.5rem" boxShadow="rgba(13, 26, 38, 0.25) 0px 4px 12px 0px" maxWidth="20rem" key = {x.id}>
                <Flex direction = "row">
                    <Flex direction = "column" basis = "100%" gap="1rem">    
                        <Heading level = {1}>{x.title}</Heading>
                        <Badge variation = "info">{x.tags}</Badge>
                        <Text as = "span">{x.description}</Text>
                        <Flex direction = "row" basis = "100%" alignSelf = "flex-end">
                            <Button variation = "primary" colorTheme = "error" onClick={() => delete_post(x.id)} >Delete</Button>
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