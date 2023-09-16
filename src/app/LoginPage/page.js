'use client'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from '@aws-amplify/auth';
import { useEffect, useState } from 'react';

function LoginPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(data => setUser(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg w-96">
        <h1 className="text-3xl font-bold mb-4">Welcome to Confident Voices</h1>
        {user ? (
          <div>
            <h2 className="text-xl mb-6">Hello, {user.username}!</h2>
            <AmplifySignOut />
          </div>
        ) : (
          <h2 className="text-xl mb-6">Please sign in...</h2>
        )}
      </div>
    </div>
  );
}

export default withAuthenticator(LoginPage);
