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
Amplify.configure(awsExports);

const SlugmaPage = ({params}) => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const result = await API.graphql(
          graphqlOperation(queries.getExercise, { id: params.slugma })
        );
        console.log(result.data.getExercise);
        setQuestions(result.data.getExercise.questions.items);
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
          <li key={question.id}>{question.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default SlugmaPage;