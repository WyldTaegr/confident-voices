'use client'
import React, { useState } from 'react';

const UserProfilePage = () => {
  const [user] = useState({
    name: 'John Doe',
    profilePicture: 'https://example.com/profile.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });

  return (
    <div className="user-profile">
      <img
        src={user.profilePicture}
        alt="Profile"
        className="profile-picture"
      />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfilePage;
