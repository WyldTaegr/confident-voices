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
import awsExports from '@/aws-exports';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Button,
  Box,
  Container,
  Paper
} from '@mui/material';
Amplify.configure(awsExports);


const AddQuestionsPage = () => {
  const router = useRouter();
  const [exercises, setExercises] = useState([]);

  //Getting all the current exercises from graphQL
  const fetchExercises = async () => {
    try {
      const exerciseData = await API.graphql({
        query: queries.listExercises,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
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
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center" sx={{ mt: 4 }}>
        <Button onClick={handleAddExercise} variant="contained" color="primary" sx={{ mb: 3 }}>
          Add Exercise
        </Button>
        <Typography variant="subtitle1" gutterBottom>
          Or please select the exercise you want to add a question to:
        </Typography>
        <Paper elevation={4} sx={{ width: '100%', my: 2 }}>
          <List component="nav" aria-label="exercise list">
            {exercises.map((exercise, index) => (
              <React.Fragment key={exercise.id}>
                <ListItem disablePadding>
                  <ListItemButton onClick={(e) => pushTo(e, exercise.id)}>
                    <ListItemText primary={<Typography variant="h6">{exercise.name}</Typography>} />
                  </ListItemButton>
                </ListItem>
                {index < exercises.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default AddQuestionsPage;