'use client'
import React from 'react';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '@/graphql/mutations';
import { Button } from '@aws-amplify/ui-react';
import awsExports from '@/aws-exports';
Amplify.configure(awsExports);


async function questionCreation(){
  const newQuestion = await API.graphql(
    graphqlOperation(mutations.createQuestion, { input: {} })
  );
}

const AddQuestionsPage = () => {
  return (
    <div>
      <h1> Add questions page</h1>    
      <input></input>
    </div>
  );
};

export default AddQuestionsPage;