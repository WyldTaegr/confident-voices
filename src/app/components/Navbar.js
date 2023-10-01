// components/Navbar.js
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/Application/UserProfilePage">
            <a className="text-white text-2xl font-bold">Home</a>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/Application/CommunityPage">
                <a className="text-white hover:text-gray-300">Community</a>
              </Link>
            </li>
            <li>
              <Link href="/Application/ProgressPage">
                <a className="text-white hover:text-gray-300">Progress</a>
              </Link>
            </li>
            <li>
              <Link href="/Application/FeedbackPage">
                <a className="text-white hover:text-gray-300">Feedback</a>
              </Link>
            </li>
            <li>
              <Link href="/Application/InteractiveExercisesPage">
                <a className="text-white hover:text-gray-300">Interactive Exercises</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
