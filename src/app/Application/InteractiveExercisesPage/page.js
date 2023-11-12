'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import * as queries from '@/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import awsExports from '@/aws-exports';
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
import { Amplify } from 'aws-amplify';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
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
    <Paper elevation={3} sx={{ margin: 2 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', padding: 2 }}>
        Exercise List
      </Typography>
      <List component="nav">
        {exercises.map(exercise => (
          <ListItem 
            button 
            key={exercise.id} 
            onClick={(e) => pushTo(e, exercise.id)}
            sx={{
              '&:hover': {
                backgroundColor: 'action.hover',
              },
              transition: 'background-color 0.3s',
            }}
          >
            <ListItemText primary={exercise.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default InteractiveExercisesPage;