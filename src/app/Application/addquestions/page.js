'use client'
/*We would want this page to be the one where the therapist chooses the exercise*/
/*The therapist can add questions to an exercise, or create a new exercise and add questions to that one*/
import React, { useState , useEffect} from 'react';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
import { API, graphqlOperation } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';
import Button from '@mui/material/Button';
import awsExports from '@/aws-exports';
import { Typography } from '@mui/material';
Amplify.configure(awsExports);


const AddQuestionsPage = () => {
  const router = useRouter();
  const [exercises, setExercises] = useState([]);

  //Getting all the current exercises from graphQL
  const fetchExercises = async () => {
    try {
      const exerciseData = await API.graphql({
        query: queries.listExercises,
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });
      setExercises(exerciseData.data.listExercises.items);
    } catch (err) {
      console.error("Error fetching exercises:", err);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  function handleAddExercise(e){
    e.preventDefault();
    router.push('/Application/addquestions/addexercise');
  }

  /**
   * Function to redirect to the required exercise page
   * @param {*} e The event context
   * @param {*} name The name of the exercise to redirect to
   */
  function pushTo(e, id){
    router.push(`/Application/addquestions/${id}`)    
  }

  return (
    <div>
      <Button onClick={handleAddExercise} variant="outlined">Add exercise</Button>
      <p> Or please select the exercise you want to add a question to:</p>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>
            <h2 onClick={(e) => pushTo(e, exercise.id)}>{exercise.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddQuestionsPage;