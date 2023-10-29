'use client'

import React from 'react';
import Navbar from '../components/Navbar';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports';
import { signOut as funcSignOut } from '@/util/auth';
Amplify.configure(awsExports);

export default function ApplicationLayout({children}){
	return (
		<Authenticator>
			{({signOut, user}) => (
				<div>
					<Navbar/>
					{children}
					<button onClick={funcSignOut} className = "text-black">FUNC SIGNOUT</button>
					<button onClick={signOut} className="text-black">SIGNOUT</button>
				</div>
			)}
		</Authenticator>
	)

};
