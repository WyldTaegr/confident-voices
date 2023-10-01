'use client';

//routing import
import {useRouter} from 'next/navigation';

//front-end imports
import React, {useState} from 'react';
import { Button, Heading, Text } from '@aws-amplify/ui-react';
import {ImPlus} from 'react-icons/im';
import '@aws-amplify/ui-react/styles.css';

//backend imports
import {addInformation, allPostInformation} from '../Database/postDB';

//import * as queries from '../../graphql/queries';
//import {listPostInfos} from '../../graphql/queries';



const CommunityPage = (e) => {
  const router = useRouter();
  // get all previous post information
  
  // puts information to backend dB
  //addInformation(newPostInfo);
  //var holdposts = allPostInformation();
  //console.log(holdposts);
  
  //const allPostsInDB = API.graphql({listPostInfos});
  // front-end
  return (
    <div>
      <Heading level={1} color= "blue"> Community Page</Heading>
      <Button variation = "primary" onClick={()=> router.push('/PostCreationPage')}>
        <ImPlus />&nbsp;
        <Text color = "white">Post</Text>
      </Button>
      
    </div>
  );
};

export default CommunityPage;