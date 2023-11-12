'use client'
// pages/index.js
import React, { useState , useEffect} from 'react';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import * as mutations from '@/graphql/mutations';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import awsExports from '@/aws-exports';
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
Amplify.configure(awsExports);


/**
 * Method to add a question to the set of questions already present in an exercise
 * @param {*} param0 
 */
const Question = ({ params }) => {
  async function questionCreation(event, inputValue){
    event.preventDefault();
    const newQuestion = await API.graphql(
      // graphqlOperation(mutations.createQuestion, { input: {
      //   description: inputValue,
      //   exerciseQuestionsId: params.slug
      // } })
      {
        query: mutations.createQuestion,
        variables: {input : {description: inputValue, exerciseID: params.slug}},
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      }
    );
  }
const router = useRouter();
const [inputValue, setInputValue] = useState('');


  //Function to handle input to the question field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Exercise: {params.slug}
          </Typography>
        </Box>
        <form onSubmit={(e) => questionCreation(e, inputValue)} noValidate autoComplete="off">
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your question"
            label="New Question"
          />
          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary" size="large">
              Add Question
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Question;