import React from 'react';
import FeedbackPageLayout from './layout'; // Import the layout
import dynamic from 'next/dynamic';

const DynamicChart = dynamic(() => import('./DynamicChart'), { ssr: false });

const data = [
  { session: 'Session 1', score: 65 },
  { session: 'Session 2', score: 72 },
  { session: 'Session 3', score: 78 },
  // Add more session data as needed
];

const comments = [
  { session: 'Session 1', comment: 'Good effort, try to slow down your speech.' },
  { session: 'Session 2', comment: 'Great improvement in clarity.' },
  { session: 'Session 3', comment: 'Excellent progress, keep practicing the exercises.' },
  // Add more comments as needed
];

const FeedbackPage = () => {
  return (
    <FeedbackPageLayout>
      <div className="text-center m-10">
        <h1 className="text-4xl text-blue-800 font-bold mb-5">Your Feedback</h1>
        <p className="text-lg mb-8">See your progress and feedback from your therapy sessions.</p>
        
        <DynamicChart data={data} />

        <div className="w-full max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl text-blue-700 mb-4">Therapist Comments</h2>
          {comments.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{item.session}</h3>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </FeedbackPageLayout>
  );
};

export default FeedbackPage;
