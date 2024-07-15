import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Html = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box flex={0.8} sx={{ backgroundColor: 'white', overflow: 'auto', maxHeight: '100vh' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/html"
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#37B7C3' : '',
                color: isActive ? 'white' : '',
              })}
            >
              <ListItemText primary="HTML HOME" />
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
              <ListItemText primary="HTML Introduction" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Elements" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Attributes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Headings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Paragraphs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Styles" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Formatting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Comments" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Color" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML CSS" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Links" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML images" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Favicon" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Page Title" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HTML Tables" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box flex={3} sx={{ backgroundColor: '#EBF4F6' }}>
        <Typography variant='h3' sx={{ color: '#071952', margin: '50px' }}>
          HTML Tutorial
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
              <li>HTML stands for Hyper Text Markup Language</li>
              <li>HTML is the standard markup language for creating Web pages</li>
              <li>HTML describes the structure of a Web page</li>
              <li>HTML consists of a series of elements</li>
              <li>HTML elements tell the browser how to display the content</li>
              <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
            </ul>
            <br />
            <br />
            <div>
              <h2>Example Explained</h2>
              <br />
              <ul>
                <li>The "!DOCTYPE html" declaration defines that this document is an HTML5 document</li>
                <li>The "html" element is the root element of an HTML page</li>
                <li>The "head" element contains meta information about the HTML page</li>
                <li>The "title" element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
                <li>The "body" element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
                <li>The "h1" element defines a large heading</li>
                <li>The "p" element defines a paragraph</li>
              </ul>
            </div>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Html;
