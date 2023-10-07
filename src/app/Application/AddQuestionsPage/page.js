'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '@/graphql/mutations';
import { Button } from '@aws-amplify/ui-react';
import awsExports from '@/aws-exports';
Amplify.configure(awsExports);

const AddQuestionsPage = () => {

  async function questionCreation(){
    const newQuestion = await API.graphql(
      graphqlOperation(mutations.createQuestion, { input: "hello" })
    );
  }

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={questionCreation}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestionsPage;