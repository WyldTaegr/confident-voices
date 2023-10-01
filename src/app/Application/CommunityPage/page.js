'use client';
import Link from 'next/link';
import React, {useState} from 'react';
import { Button, Alert } from '@aws-amplify/ui-react';
import {ImPlus} from 'react-icons/im';
import '@aws-amplify/ui-react/styles.css';


const CommunityPage = () => {
    const [alert, setAlert] = useState(false);
  
  return (
    <div>
      <h1> COMMUNITY PAGE</h1>
      <Button variation = "primary" onClick={()=> setAlert(!alert)}>
        <ImPlus />&nbsp;
        <Link href="/PostCreationPage">
            <a className="text-white text-2xl font-bold">Post</a>
        </Link>
      </Button>
      {alert ? (<Alert variation="info" isDimissible={true} hasIcon={true}>Opening post creation form</Alert>): null}
    </div>
  );
};

export default CommunityPage;