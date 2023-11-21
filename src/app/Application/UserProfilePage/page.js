'use client'
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import { CircularProgress, Paper, Typography, Box, Button } from '@mui/material';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(currentUser => {
        setUser(currentUser);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      router.push('/LoginPage');
      // Redirect to the sign-in page or update the state as needed

    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  if (!user) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {user.attributes.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {user.attributes.family_name}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignOut}
          sx={{ marginTop: '20px' }}
        >
          Sign Out
        </Button>
      </Paper>
    </Box>
  );
};

export default UserProfilePage;
