'use client'
// pages/index.js
import React from 'react';
import Link from 'next/link';
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
import { Amplify } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import * as queries from '@/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import awsExports from '@/aws-exports';
import AudioRecording from '@/components/AudioRecording';
import Videofeed from '@/components/Videofeed';
import { Card, Typography, Button, Box, CardContent, CardActions, Grid } from '@mui/material';

Amplify.configure(awsExports);
//Every time a user records themselves, a new S3 bucket is created, and recordings are pushed into new S3 bucket.
const SlugmaPage = ({params}) => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Fetch all questions
        const allQuestionsData = await API.graphql({
          query: queries.listQuestions,
          authMode: GRAPHQL_AUTH_MODE.API_KEY
        });
        
        // Filter questions related to the given exerciseId
        const relatedQuestions = allQuestionsData.data.listQuestions.items.filter(
          (question) => question.exerciseID === params.slugma
        );
        
        setQuestions(relatedQuestions);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };

    fetchQuestions();
  }, [params.slugma]);

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Questions
      </Typography>
      <Grid container spacing={2}>
        {questions.map((question) => (
          <Grid item xs={12} md={6} lg={4} key={question.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {question.description}
                </Typography>
                {/* Insert additional content here */}
              </CardContent>
              <CardActions>
                {/* If you have actions like buttons, they would go here */}
              </CardActions>
              <Box sx={{ margin: 2 }}>
                <AudioRecording questionID = {params.slugma} />
                <Videofeed/>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SlugmaPage;