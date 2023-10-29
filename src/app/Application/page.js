// pages/index.js
import React from 'react';
import { API } from 'aws-amplify';
import * as queries from '@/graphql/queries';

export default async function ApplicationPage() {
  let output = ""
  const users = await API.graphql({query: queries.listExercises});
  output += JSON.stringify(users, null, 4);

  
  return (
    <div className="text-black">
      ApplicationPage
      <h1>Users</h1>
      <p>{output}</p>
    </div>
  );
};