import React from 'react';
import Navbar from '../components/Navbar';
import { Amplify, Auth } from 'aws-amplify';
import { redirect } from 'next/navigation';
import awsExports from '@/aws-exports';
Amplify.configure(awsExports);

export default async function ApplicationLayout({children}){
	
	try {
		console.log(await Auth.currentAuthenticatedUser());
	} catch (e) {
		if (e != "The user is not authenticated") {
			console.log("ERR - Uncaught Exception with Auth:");
			console.error(e);
		}
		redirect("/LoginPage");
	}

	return (
		
		<div>
            <Navbar/>
			{children}
		</div>
	)

};
