// components/Navbar.js
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link
            href="/Application/UserProfilePage"
            className="text-white text-2xl font-bold">
            Home
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/Application/CommunityPage"
                className="text-white hover:text-gray-300">
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/Application/ProgressPage"
                className="text-white hover:text-gray-300">
                Progress
              </Link>
            </li>
            <li>
              <Link
                href="/Application/FeedbackPage"
                className="text-white hover:text-gray-300">
                Feedback
              </Link>
            </li>
            <li>
              <Link
                href="/Application/InteractiveExercisesPage"
                className="text-white hover:text-gray-300">
                Interactive Exercises
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
