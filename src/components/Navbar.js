import React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          href="/"
          aria-label="home"
        >
          <HomeIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          href="https://github.com/russellelliott"
          target="_blank"
          rel="noopener"
          aria-label="github"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/russell-elliott-2001/"
          target="_blank"
          rel="noopener"
          aria-label="linkedin"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.youtube.com/channel/UCY4L4GNljnzOG5a8Vvqiwqw"
          target="_blank"
          rel="noopener"
          aria-label="youtube"
        >
          <YouTubeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
