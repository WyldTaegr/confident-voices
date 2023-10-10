'use client'
// pages/index.js
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Question = ({ params }) => {
const router = useRouter();
  return (
    <div>
     <p>Post: {params.slug}</p>  
    </div>
  );
};

export default Question;