'use client'

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Flex, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports';
import { getCurrentUser, signOut } from '@/util/auth';
import { useRouter } from 'next/navigation';
import styles from '../../styles/baseApp.css';

Amplify.configure(awsExports);

export default function ApplicationLayout({children}){
	const [user, setUser] = useState("...");
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const router = useRouter();
	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

	const handleSignOut = async () => {
		await signOut();
		router.push("/LoginPage");
	}

	useEffect(() => {
		getCurrentUser().then((user) => {
		  if (user === null) {
			router.push("/LoginPage");
		  } else {
			setUser(user.attributes.name +" " +user.attributes.family_name);
		  }
		});
	  }, [router]);
	  
	return (
		<div>
      <Navbar/>
      <Flex direction="row" justifyContent="space-between" className={styles.userProfile}>
        <span onClick={toggleDropdown} className={styles.userEmail}>{user}</span>
        {dropdownOpen && (
          <Flex direction="column" className={styles.dropdown}>
            <Button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</Button>
          </Flex>
        )}
      </Flex>
      {children}
    </div>
  );

};
