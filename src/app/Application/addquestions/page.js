'use client'
/*We would want this page to be the one where the therapist chooses the exercise*/
/*The therapist can add questions to an exercise, or create a new exercise and add questions to that one*/
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
 * Method to create a question
 * @param {*} event the event context from the click
 * @param {*} inputValue the question to be created
 */
async function questionCreation(event, inputValue){
  event.preventDefault();
  const newQuestion = await API.graphql(
    graphqlOperation(mutations.createQuestion, { input: {description: inputValue} })
  );
}

const AddQuestionsPage = () => {
  const router = useRouter();
  const [exercises, setExercises] = useState([]);

  //Getting all the current exercises from graphQL
  const fetchExercises = async () => {
    try {
      const exerciseData = await API.graphql(graphqlOperation(queries.listExercises));
      setExercises(exerciseData.data.listExercises.items);
    } catch (err) {
      console.error("Error fetching exercises:", err);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  //Input value for the question
  const [inputValue, setInputValue] = useState('');

  //Function to handle input to the question field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  /**
   * Function to redirect to the required exercise page
   * @param {*} e The event context
   * @param {*} name The name of the exercise to redirect to
   */
  function pushTo(e, name){
    router.push(`/Application/addquestions/${name}`)    
  }

  return (
    <div>
      <p>Please select the exercise you want to add a question to:</p>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>
            <h2 onClick={(e) => pushTo(e, exercise.name)}>{exercise.name}</h2>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => questionCreation(e, inputValue)}>
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