'use client'
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import {
  CircularProgress, Paper, Typography, Box, Button, TextField, Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [aboutMe, setAboutMe] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(currentUser => {
        setUser(currentUser);
        // Initialize aboutMe with data from the user object if it exists
        setAboutMe(currentUser.attributes.profile || '');
      })
      .catch(err => console.log(err));
  }, []);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      router.push('/LoginPage');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px', textAlign: 'center', maxWidth: '500px', margin: 'auto' }}>
        <Avatar
          src={profileImage}
          sx={{ width: 100, height: 100, margin: 'auto' }}
          alt="Profile Picture"
        />
        <label htmlFor="profile-image-upload">
          <Input accept="image/*" id="profile-image-upload" type="file" onChange={handleImageChange} />
          <Button variant="contained" component="span" sx={{ my: 2 }}>
            Upload Photo
          </Button>
        </label>
        <Typography variant="h4" component="h1" gutterBottom>
          {user.attributes.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {user.attributes.family_name}
        </Typography>
        <TextField
          label="About Me"
          multiline
          rows={4}
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
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
