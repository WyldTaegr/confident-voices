import React from 'react';
import Link from 'next/link';


const UserProfilePage = () => {
  return (
    <div>
      <h1> User Profile</h1>
      <button>
        <Link href='/'> GO BACK HOME</Link>
      </button>     
    </div>
  );
};

export default UserProfilePage;