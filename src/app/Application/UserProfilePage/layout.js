import React from 'react';
import { Box } from '@mui/material';

export default function UserProfilePageLayout({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default', // Use theme colors for better UI
        color: 'text.primary', // Use theme colors for better UI
        padding: '20px' // Add padding for better spacing
      }}
    >
      {children}
    </Box>
  );
};
