// pages/index.js
import React from 'react';
import Link from 'next/link';

const Level1Page = () => {
  return (
    <div>
      <h1> Level 1</h1>
      {
        /**
         * Have a for loop that iterates through the questions which are stored in database
         * Would perhaps have a form of some sort that stores the recordings in S3 bucket.
         * The recordings would be mapped to the question which was answered.
         * Format would have to be something like:
         * Question......
         * voice recording
         * Question.......
         * voice recording
         * Question.......
         * voice recording
         */
      }
      <p>Questions:</p>
      
    </div>
  );
};

export default Level1Page;