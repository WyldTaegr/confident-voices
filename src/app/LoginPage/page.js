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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 pattern-grid-lg">
      <div className="p-8 bg-white shadow-2xl rounded-lg w-96 space-y-6">
        <div className="flex justify-center">
          <img src="/path_to_your_logo.png" alt="Confident Voices Logo" className="w-24 h-24 mb-4" />
        </div>
        <h1 className="text-3xl font-bold text-center">Confident Voices</h1>
        {user ? (
          <div className="text-center space-y-4">
            <h2 className="text-xl">Hello, {user.username}!</h2>
            <AmplifySignOut className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
          </div>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-xl mb-4">Welcome back!</h2>
            <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign In</button>
          </div>
        )}
      </div>
    </div>
  );
}
//withAuthenticator removed why doesnt this work ...HMMM 
//TO DO: understand AWS COGNITO

export default (LoginPage);
