'use client'
import React from 'react';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '@/graphql/mutations';
import { Button } from '@aws-amplify/ui-react';
import awsExports from '@/aws-exports';
Amplify.configure(awsExports);


async function exerciseCreation(){
  const newExercise = await API.graphql(
    graphqlOperation(mutations.createExercise, { input: {} })
  );
}

const InteractiveExercisesPage = () => {
  return (
    <div>
      <h1>Interactive Exercises</h1>
      <div>
        <h3> 
          <Link href="/Application/InteractiveExercisesPage/Level1">
            Beginner: Short description
          </Link>
        </h3>  
      </div> 
      <div>
        <Link href="/Application/InteractiveExercisesPage/Level2">
              Intermediate: Short description
        </Link>
      </div>
      <div>
        <Link href="/Application/InteractiveExercisesPage/Level3">
              Advanced: Short description
        </Link>
      </div>
      <Button onClick={exerciseCreation}>Click to add to Database</Button>
    </div>
  );
};

export default InteractiveExercisesPage;