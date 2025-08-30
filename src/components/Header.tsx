import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          N_noa21`s Portfolio
        </Typography>
        
        <Box>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#skills">Skills</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};