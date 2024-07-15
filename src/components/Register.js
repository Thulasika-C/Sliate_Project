import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import logo from "../assets/Logo.png";

const Register = () => {
  return (
    <Box flex={3} sx={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        height: { xs: '100vh', md: '75vh' },
        padding: '20px',
        width: { xs: '90%', md: '80%' },
        textAlign: 'center',
        marginLeft: { xs: 'auto', md: '100px' },
        marginTop: '20px',
        borderRadius: '50px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        //mx: 'auto'
      }}>
      
      <img
        src={logo}
        alt="About Edu.Go"
        style={{
          width:'47%',
          marginRight: '20px',
          marginBottom: '20px'
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
        <Typography sx={{ color: '#071952', fontWeight: 'bold' }}>
          Register Here
        </Typography>
        <TextField id="standard-text" label="Your username" type="text" variant="standard" />
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
          Register
        </Button>
      </Box>
    </Box>
  )
}

export default Register;
