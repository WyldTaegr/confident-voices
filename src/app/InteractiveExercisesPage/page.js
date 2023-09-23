import React from 'react';
import Link from 'next/link';


const InteractiveExercisesPage = () => {
  return (
    <div>
      <h1>Interactive Exercises</h1>
      <div>
        <h3> 
          <Link href="/InteractiveExercisesPage/Level1">
            Beginner: Short description
          </Link>
        </h3>  
      </div> 
      <div>
      <Link href="/InteractiveExercisesPage/Level2">
            Intermediate: Short description
      </Link>
      </div>
      <div>
      <Link href="/InteractiveExercisesPage/Level3">
            Advanced: Short description
      </Link>
      </div>
    </div>
  );
};

export default InteractiveExercisesPage;