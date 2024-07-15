import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box flex={100} sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '80vh',
      textAlign: 'center'
    }}  >

      <Typography 
        variant="h2" 
        component="h1" 
        sx={{ textAlign: 'center', fontWeight:'bold', color:'#071952'}}
      >
        Learn to Code 
      </Typography>
      
      <Typography 
        variant="h5" 
        sx={{ textAlign: 'center',color:'#37B7C3' }}
      >
        With Edu.Go
      </Typography>

      <TextField 
        variant="outlined"
        placeholder="Search..."
        sx={{ width: '40%', maxWidth: '600px', border:'solid',borderWidth:'1px' , borderRadius:'45px', marginTop:'1.5%'}}  
      />
    </Box>
  )
}

export default Home
