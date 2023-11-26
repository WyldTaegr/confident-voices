// components/Navbar.js
import Link from 'next/link';
import React from 'react';

const Navbar = ({ userName, onSignOut }) => {
  return (
    <nav className="bg-gray-800 text-white text-sm">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/Application/UserProfilePage">
                <button className="px-3 py-2 rounded-md hover:bg-gray-700 ">Home</button>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/Application/CommunityPage">
                  <button className="px-3 py-2 rounded-md hover:bg-gray-700 ">Community</button>
                </Link>
                <Link href="/Application/ProgressPage">
                  <button className="px-3 py-2 rounded-md hover:bg-gray-700 ">Progress</button>
                </Link>
                <Link href="/Application/FeedbackPage">
                  <button className="px-3 py-2 rounded-md hover:bg-gray-700 ">Feedback</button>
                </Link>
                <Link href="/Application/InteractiveExercisesPage">
                  <button className="px-3 py-2 rounded-md hover:bg-gray-700 ">Interactive Exercises</button>
                </Link>
                <Link href="/Application/addquestions">
                  <button className="px-3 py-2 rounded-md hover:bg-gray-700 ">Exercise Creation</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span className="px-3 py-2 rounded-md hover:bg-gray-700 border border-white mr-4">{userName}</span>
            <button
              className="px-3 py-2 rounded-md hover:bg-gray-700 border border-white"
              onClick={onSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
