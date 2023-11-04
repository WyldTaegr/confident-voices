'use client'
import React from 'react';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import * as queries from '@/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import awsExports from '@/aws-exports';
import Videofeed from '@/app/components/Videofeed';
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
Amplify.configure(awsExports);


// async function exerciseCreation(){
//   const newExercise = await API.graphql(
//     graphqlOperation(mutations.createExercise, { input: {} })
//   );
// }

const InteractiveExercisesPage = () => {

  const router = useRouter();
  const [exercises, setExercises] = useState([]);

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

   /**
   * Function to redirect to the required exercise page
   * @param {*} e The event context
   * @param {*} name The name of the exercise to redirect to
   */
   function pushTo(e, id){
    router.push(`/Application/InteractiveExercisesPage/${id}`)    
  }

  return (

    <div>
      <h1>Interactive Exercises</h1>
      <Videofeed></Videofeed>
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

export default InteractiveExercisesPage;