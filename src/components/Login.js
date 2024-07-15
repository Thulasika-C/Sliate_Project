import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import login from "../assets/login.jpg"; // Ensure the correct path to the login image
import { Link } from 'react-router-dom';

export default function FormPropsTextFields() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        height: {xs:'100vh', md :'75vh'},
        padding: '20px',
        width: { xs: '90%', md: '80%' },
        textAlign: 'center',
        marginLeft: { xs: '0', md: '100px' },
        marginTop: '20px',
        borderRadius: '50px',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        mx: 'auto'
      }}
    >
      <Typography variant='h4' sx={{
        marginBottom: { xs: '20px', md: '35%' },
        marginRight: { xs: '0', md: '5%' },
        color: '#071952',
        fontWeight: 'bold',
        textAlign: { xs: 'center', md: 'left' },
      }}>
        Edu.Go
      </Typography>

      <img
        src={login}
        alt="About Edu.Go"
        style={{
          width: '100%',
          maxWidth: '300px',
          marginRight: { xs: '0', md: '20px' },
          marginBottom: { xs: '20px', md: '0' }
        }}
      />

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          padding: '50px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
        noValidate
        autoComplete="off"
      >
        <Typography sx={{ color: '#071952', fontWeight: 'bold', marginBottom: '20px' }}>
          Login to your account
        </Typography>

        <TextField id="standard-email" label="Your email" type="email" variant="standard" />
        <TextField id="standard-password" label="Your password" type="password" variant="standard" />

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#071952',
            color: 'white',
            '&:hover': {
              backgroundColor: '#053a8b',
            },
            marginTop: '20px',
            width: '100%',
            maxWidth: '25ch',
          }}
        >
          Log in
        </Button>
      </Box>

      <Button
        variant="outlined"
        sx={{
          color: '#071952',
          borderColor: '#071952',
          marginBottom: { xs: '0', md: '35%' },
          marginTop: { xs:'20px', md:'0'},
          fontWeight: 'bold',
        }}
        component={Link} to="/register"
      >
        Register
      </Button>
    </Box>
  );
}
