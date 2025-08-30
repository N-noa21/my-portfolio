import { Box, Typography } from '@mui/material';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      component="footer" 
      sx={{
        py: 3,
        textAlign: 'center',
        backgroundColor: '#333',
        color: 'white',
      }}
    >
      <Typography variant="body2">
        &copy; {currentYear} N_noa21. All Rights Reserved.
      </Typography>
    </Box>
  );
};