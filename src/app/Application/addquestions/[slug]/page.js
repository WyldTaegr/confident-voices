'use client'
// pages/index.js
import React, { useState , useEffect} from 'react';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';
import { Button } from '@aws-amplify/ui-react';
import awsExports from '@/aws-exports';
Amplify.configure(awsExports);


/**
 * Method to add a question to the set of questions already present in an exercise
 * @param {*} param0 
 */
const Question = ({ params }) => {
  async function questionCreation(event, inputValue){
    event.preventDefault();
    const newQuestion = await API.graphql(
      graphqlOperation(mutations.createQuestion, { input: {description: inputValue} })
    );
    const newQuestionId = newQuestion.data.createQuestion.id;
    const exercise = await API.graphql(
      graphqlOperation(queries.getExercise, { id: params.slug })
    );
    const currentQuestionIds = exercise.data.getExercise.questions.items.map(q => q.id);

      // Then, update the Exercise with the new question ID
    await API.graphql(
      graphqlOperation(mutations.updateExercise, {
        input: {
          id: params.slug,
          questions: [...currentQuestionIds, newQuestionId] // assumes a simple array of IDs
        }
      })
    );
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
     <form onSubmit={(e) => questionCreation(e, inputValue)}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button type="submit">Add Question</button>
      </form>
    </div>
    
  );
};

export default Question;