'use client'

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Flex, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports';
import { getCurrentUser, signOut } from '@/util/auth';
import { useRouter } from 'next/navigation';
Amplify.configure(awsExports);

export default function ApplicationLayout({children}){
	const [user, setUser] = useState("...");
	const router = useRouter();
	const handleSignOut = async () => {
		await signOut();
		router.push("/LoginPage");
	}

	useEffect(() => {
		getCurrentUser().then((user) => {
			if (user === null) router.push("/LoginPage");
			else setUser(user.attributes.email);
		})
	});
	return (
				<div>
					<Navbar/>
					{children}
					<Flex direction="row" gap="medium">
						{user}
						<Button onClick={handleSignOut} className="text-black">SIGNOUT</Button>
					</Flex>
				</div>
	)

};
