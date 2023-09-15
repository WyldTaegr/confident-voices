// pages/index.js
import React from 'react';
import Link from 'next/link';
//import Route from "react-router-dom";
//import Button from 'react-bootstrap/Button'

const ProgressPage = () => {
  return (
    <div>
      <h1> PROGRESS PAGE</h1>
      <button>
        <Link href='/'>HOME</Link>
      </button>     
    </div>
  );
};

export default ProgressPage;