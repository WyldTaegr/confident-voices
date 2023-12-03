'use client'
import React from 'react';
import FeedbackPageLayout from './layout'; // Import the layout
import dynamic from 'next/dynamic';
import { useState } from 'react';

const DynamicChart = dynamic(() => import('./DynamicChart'), { ssr: false });

const data = [
  { session: 'Session 1', score: 2 },
  { session: 'Session 2', score: 2.5 },
  { session: 'Session 3', score: 3 },
  { session: 'Session 4', score: 3 },
  { session: 'Session 5', score: 3 },
  { session: 'Session 6', score: 3 },
  { session: 'Session 7', score: 3 },
  { session: 'Session 8', score: 4 },
  { session: 'Session 9', score: 4.5 },
  { session: 'Session 10', score: 4.5 },



];


const FeedbackPage = () => {

  const [comments, setComments] = useState([
    { session: 'Session 1', comment: 'Good effort, try to slow down your speech.' },
    { session: 'Session 2', comment: 'Great improvement in clarity.' },
    { session: 'Session 3', comment: 'Excellent progress, keep practicing the exercises.' },
    { session: 'Session 4', comment: 'Great improvement, keep practicing the exercises.' },
  
    // Add more comments as needed
  ]);
  
  const [newSession, setNewSession] = useState('');
  const [newComment, setNewComment] = useState('');
  
  const handleAddComment = () => {
    if (newSession && newComment) {
      setComments([...comments, { session: newSession, comment: newComment }]);
      setNewSession('');
      setNewComment('');
    }
  };
  return (
    <FeedbackPageLayout>
      <div className="text-center m-10">
        <h1 className="text-4xl text-blue-800 font-bold mb-5">Your Feedback</h1>
        <p className="text-lg mb-8">See your progress and feedback from your therapy sessions.</p>
        
        <DynamicChart data={data} />

        <div className="w-full max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl text-blue-700 mb-4">Therapist Comments</h2>

          <div className="mb-5">
            <input
              className="border p-2 mr-2"
              value={newSession}
              onChange={(e) => setNewSession(e.target.value)}
              placeholder="Session Number"
            />
            <input
              className="border p-2 mr-2"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Comment"
            />
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={handleAddComment}
            >
              Add Comment
            </button>
          </div>

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
