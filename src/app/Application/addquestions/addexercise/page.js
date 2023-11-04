'use client'
// pages/index.js
import React, { useState , useEffect} from 'react';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import * as mutations from '@/graphql/mutations';
import { Button } from '@aws-amplify/ui-react';
import awsExports from '@/aws-exports';
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
Amplify.configure(awsExports);


/**
 * Method to add a question to the set of questions already present in an exercise
 * @param {*} param0 
 */
const Exercise = ({ params }) => {
  async function exerciseCreation(event, inputValue){
    event.preventDefault();
    const newQuestion = await API.graphql({
      query: mutations.createExercise,
      variables: {input: {name: inputValue}},
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });
  }
const router = useRouter();
const [inputValue, setInputValue] = useState('');


  //Function to handle input to the question field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <div>
     <p>Exercise: {params.slug}</p> 
     <form onSubmit={(e) => exerciseCreation(e, inputValue)}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button type="submit">Add Exercise</button>
      </form>
    </div>
    
  );
};

export default Exercise;