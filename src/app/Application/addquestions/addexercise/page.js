'use client'
// pages/index.js
import React, { useState , useEffect} from 'react';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import * as mutations from '@/graphql/mutations';
import awsExports from '@/aws-exports';
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
import { Box, Button, TextField, Typography, Container } from '@mui/material';
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
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });
    setInputValue("");
    alert("Exercise has been added");
  }
const router = useRouter();
const [inputValue, setInputValue] = useState('');


  //Function to handle input to the question field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <Container maxWidth="sm">
      <Box my={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" component="h2" gutterBottom>
          Exercise: {params.slug}
        </Typography>
        <form onSubmit={(e) => exerciseCreation(e, inputValue)} noValidate autoComplete="off" style={{ width: '100%' }}>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter something"
            label="New Exercise"
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Add Exercise
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Exercise;