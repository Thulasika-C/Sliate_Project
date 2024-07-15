import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Css = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box flex={0.8} sx={{ backgroundColor: 'white', overflow: 'auto', maxHeight: '100vh' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/css"
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#37B7C3' : '',
                color: isActive ? 'white' : '',
              })}
            >
              <ListItemText primary="CSS HOME" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton 
              component={NavLink}
              to="/intro"
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#37B7C3' : '',
                color: isActive ? 'white' : '',
              })}
            >
              <ListItemText primary="CSS Introduction" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="CSS Syntax" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="CSS Comments" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="CSS Color" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Css Background" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Css Borders" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Css Margins/Padding" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Css Fonts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Css Icons" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Css Tables" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Css Links" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Css Display" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Css Max-width" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Css Position" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Css Navigation Bar" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box flex={3} sx={{ backgroundColor: '#EBF4F6' }}>
        <Typography variant='h3' sx={{ color: '#071952', margin: '50px' }}>
          CSS Tutorial
        </Typography>

        <Box sx={{
          backgroundColor: '#088395',
          opacity: '0.8',
          border: 'none',
          borderRadius: '15px',
          height: '100vh',
          padding: '20px',
          overflow: 'auto'  // Add this line to make the inner Box scrollable
        }}>
          <Typography sx={{
            color: 'black',
            fontSize: '20px'
          }}>
            <ul>
              <li>CSS is the language we use to style an HTML document.</li>
              <li>CSS describes how HTML elements should be displayed.</li>
              <li>CSS stands for Cascading Style Sheets</li>
              <li>External stylesheets are stored in CSS files</li>
              <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
              <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
            </ul>
            <br />
            <br />
            <div>
              <h2>Why Use CSS?</h2>
              <br />
              <ul>
                <li>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</li>
               
              </ul>
            </div>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Css;
