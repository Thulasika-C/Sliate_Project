import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Course from './components/Course';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import Html from './components/Html';
import Register from './components/Register';
import Css from './components/Css';
import Quizzes from './components/Quizzes';


function App() {
  return (
    <Box>
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route path='/' element={<Home /> } />
          <Route path='/home' element={<Home /> } />
          <Route path='/about' element={<About />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/html" element={<Html />} />
          <Route path='/html' element={<Html />} /> 
          <Route path='/css' element={<Css />} /> 
        
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;

