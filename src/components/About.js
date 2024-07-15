import { Box, Button, Typography } from "@mui/material";
import React from "react";
import homebg2 from "../assets/homebg2.jpg"; // Adjust the path if necessary
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box sx={{ 
      padding: '30px', 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      alignItems: 'center' 
    }}>
      <img
        src={homebg2}
        alt="About Edu.Go"
        style={{ 
          width: '100%', 
          maxWidth: '650px', 
          margin: { xs: '0 auto 30px', md: '30px auto' } 
        }}
      />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'left' }
      }}>
        <Typography variant="h4" sx={{
          marginLeft: { xs: '0', md: '115px' }, 
          color: '#071952',
          padding: '10px',
          borderRadius: '20px',
          fontWeight: 'bold',
        }}>
          Welcome to EDU.GO 
        </Typography>

        <Typography variant="h4" sx={{ 
          marginTop: '20px', 
          marginLeft: { xs: '0', md: '125px' }, 
          textAlign: { xs: 'center', md: 'justify' } 
        }}>
          You can join with Edu.Go and upgrade your skill for your bright future.
        </Typography>
        <Link href="#" sx={{ textDecoration: 'none', marginTop: '20px' }} />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#071952',
            marginLeft: { xs: '0', md: '125px' },
            marginTop: '8px',
            color: 'white',
            '&:hover': {
                backgroundColor: '#053a8b',
            },
          }}
        >
          Start A Course
        </Button>
      </Box>
    </Box>
  );
}

export default About;
