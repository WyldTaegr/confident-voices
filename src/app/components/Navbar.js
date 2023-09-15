// components/Navbar.js
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-white text-2xl font-bold">Home</a>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/CommunityPage">
                <a className="text-white hover:text-gray-300">Community Page</a>
              </Link>
            </li>
            <li>
              <Link href="/ProgressPage">
                <a className="text-white hover:text-gray-300">Progress Page</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
