import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import PhpSharpIcon from '@mui/icons-material/PhpSharp';
import StorageIcon from '@mui/icons-material/Storage';
import JavascriptSharpIcon from '@mui/icons-material/JavascriptSharp';
import CssSharpIcon from '@mui/icons-material/CssSharp';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const navItems = ['Home', 'About', 'Quizzes', 'Course'];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [avatarEl, setAvatarEl] = useState(null);

  const handleCourseClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAvatarEl(null);
  };

  const handleAvatarClick = (event) => {
    setAvatarEl(event.currentTarget);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#071952', padding: '10px' }}>
      <StyledToolbar>
        <Typography variant="h5" sx={{ marginLeft: '40px' }}>EDU.GO</Typography>
        <Avatar src="/static/images/avatar/1.jpg" onClick={handleAvatarClick} />
        <Menu
          anchorEl={avatarEl}
          open={Boolean(avatarEl)}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'avatar-button',
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/login">Login</MenuItem>
        </Menu>
      </StyledToolbar>

      <List
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', md: 'row' },
          marginTop: { xs: '10px', md: '-60px' },
          width: { xs: '100%', md: '600px' },
          marginLeft: { xs: '0', md: '610px' },
          alignItems: 'center',
        }}
      >
        {navItems.map((item) => (
          item === 'Course' ? (
            <ListItem key={item} disablePadding sx={{ display: 'flex' }}>
              <ListItemButton sx={{ textAlign: 'right' }} onClick={handleCourseClick}>
                <ListItemText primary={item} />
                <ListItemIcon>
                  <ExpandMoreIcon sx={{ color: 'white', textAlign: 'right' }} />
                </ListItemIcon>
              </ListItemButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'course-button',
                }}
              >
                <List sx={{ display: 'flex', flexDirection: 'column' }}>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <CodeIcon />
                    </ListItemIcon>
                    <MenuItem
                      onClick={handleClose}
                      component={NavLink}
                      to="/html"
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? '#37B7C3' : '',
                        color: isActive ? 'white' : '',
                      })}
                    >
                      HTML
                    </MenuItem>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <CssSharpIcon />
                    </ListItemIcon>
                    <MenuItem
                      onClick={handleClose}
                      component={NavLink}
                      to="/css"
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? '#37B7C3' : '',
                        color: isActive ? 'white' : '',
                      })}>
                        CSS</MenuItem>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <JavascriptSharpIcon />
                    </ListItemIcon>
                    <MenuItem onClick={handleClose}>JavaScript</MenuItem>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StorageIcon />
                    </ListItemIcon>
                    <MenuItem onClick={handleClose}>MySQL</MenuItem>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <PhpSharpIcon />
                    </ListItemIcon>
                    <MenuItem onClick={handleClose}>PHP</MenuItem>
                  </ListItem>
                </List>
              </Menu>
            </ListItem>
          ) : (
            <ListItem key={item} disablePadding sx={{ display: 'flex' }}>
              <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} to={`/${item.toLowerCase()}`} style={({ isActive }) => ({
              borderBottom: isActive ? '5px solid #37B7C3' : '',
              color: isActive ? 'white' : '',}) }>
                <ListItemText primary={item} />
              </ListItemButton >
            </ListItem>
          )
        ))}
      </List>
    </AppBar>
  );
};

export default NavBar;
