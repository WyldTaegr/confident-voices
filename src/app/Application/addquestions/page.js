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



async function questionCreation(event, inputValue){
  event.preventDefault();
  const newQuestion = await API.graphql(
    graphqlOperation(mutations.createQuestion, { input: {description: inputValue} })
  );
}

const AddQuestionsPage = () => {
  const router = useRouter();
  const [exercises, setExercises] = useState([]);

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

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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