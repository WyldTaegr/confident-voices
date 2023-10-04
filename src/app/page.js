'use client'
// pages/index.js
import React from 'react';

import Link from 'next/link';
import { Button } from '@aws-amplify/ui-react';

const HomePage = () => {
  return (
    <div>
      Landing Page
      <Link href="/LoginPage" legacyBehavior>
      <Button>Sign in!</Button>
      </Link> 
    </div>
  );
};


export default HomePage;
