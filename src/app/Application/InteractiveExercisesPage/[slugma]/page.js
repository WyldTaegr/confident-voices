'use client'
// pages/index.js
import React from 'react';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import * as queries from '@/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import awsExports from '@/aws-exports';
import AudioRecording from '@/app/components/AudioRecording';
import Videofeed from '@/app/components/Videofeed';
Amplify.configure(awsExports);

const SlugmaPage = ({params}) => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Fetch all questions
        const allQuestionsData = await API.graphql(
          graphqlOperation(queries.listQuestions)
        );
        
        // Filter questions related to the given exerciseId
        const relatedQuestions = allQuestionsData.data.listQuestions.items.filter(
          (question) => question.exerciseQuestionsId === params.slugma
        );
        
        setQuestions(relatedQuestions);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };

    fetchQuestions();
  }, [params.slugma]);

  return (
    <div>
      <p>Questions:</p>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.description}
            <AudioRecording></AudioRecording>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlugmaPage;