'use client'
import React, { useState } from 'react';

const UserProfilePage = () => {
  const [user] = useState({
    name: 'John Doe',
    profilePicture: 'https://example.com/profile.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={user.profilePicture}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-2xl font-semibold">{user.name}</h1>
      <p className="text-gray-600 mt-2">{user.bio}</p>
    </div>
  );
};

export default UserProfilePage;
