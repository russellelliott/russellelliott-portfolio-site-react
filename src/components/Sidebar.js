import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Divider,
  IconButton,
  AppBar,
  Toolbar,
  CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaGithub, FaLinkedin, FaYoutube, FaFile, FaExternalLinkAlt } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

const drawerWidth = 300;

const Sidebar = (props) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 2 }}>
      {/* Profile Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Avatar
          alt="Russell Elliott"
          src="/profile.jpg"
          sx={{ width: 100, height: 100, mb: 1 }}
        />
        <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
          Russell Elliott
        </Typography>
        <Typography variant="subtitle2" align="center" color="text.secondary" gutterBottom>
          Full Stack/Edge AI/LLM Engineer
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1, mb: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Typography>
        <Typography variant="caption" align="center" color="text.secondary">
          Santa Cruz, CA
        </Typography>
        <Typography variant="caption" align="center" color="text.secondary">
          Open to roles in SF Bay Area
        </Typography>
      </Box>

      <Divider />

      {/* Navigation Links */}
      <List>
        {[
          { text: 'Github', icon: <FaGithub />, href: 'https://github.com/russellelliott' },
          { text: 'Linkedin', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/russell-elliott-2001/' },
          { text: 'Youtube', icon: <FaYoutube />, href: 'https://www.youtube.com/channel/UCY4L4GNljnzOG5a8Vvqiwqw' },
          { text: 'Resume', icon: <FaFile />, href: '/Russell_Elliott___Resume.pdf' },
          { text: 'Contact Me', icon: <CiMail />, href: 'mailto:russell@quadsquad.net' },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" href={item.href} target="_blank" rel="noopener noreferrer">
              <ListItemIcon sx={{ minWidth: 40, fontSize: 20 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
              <FaExternalLinkAlt size={12} color="gray" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* What I Do Section */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          What I do
        </Typography>
        <Typography variant="body2" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
          <li>
            Seeking software engineering roles in the San Francisco Bay Area.
          </li>
        </Typography>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Mobile AppBar for Toggle */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { sm: 'none' }, // Hide on desktop where sidebar is persistent
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Russell Elliott
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Component */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile Drawer */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawerContent}
        </Drawer>
        
        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar sx={{ display: { sm: 'none' } }} />
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
