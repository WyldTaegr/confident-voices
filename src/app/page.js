// pages/index.js
import React from 'react';

import Link from 'next/link';

const HomePage = () => {
  return (
    <div>

      <p>Here is NOT some page content.</p>
      <p>This will go to the community page <Link href="/CommunityPage"> click here! </Link></p>
      <p>This will go to the feedback page <Link href="/FeedbackPage"> click here! </Link></p>
      <p>This will go to the interactive exercises page <Link href="/InteractiveExercisesPage"> click here! </Link></p>
      <p>This will go to the progress page <Link href="/ProgressPage"> click here! </Link></p>

    </div>
  );
};


export default HomePage;
