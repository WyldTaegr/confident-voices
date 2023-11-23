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

export default function ApplicationLayout({ children }) {
    const [user, setUser] = useState("...");
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/LoginPage");
    }

    useEffect(() => {
        getCurrentUser().then((currentUser) => {
          if (currentUser === null) {
            router.push("/LoginPage");
          } else {
            setUser(currentUser.attributes.name);
          }
        });
      }, [router]);

    return (
        <div>
            <Navbar userName={user} onSignOut={handleSignOut}/>
            {/* Removed the dropdown and related components */}
            {children}
        </div>
    );
};