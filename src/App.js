import './App.css'
import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { Navbar } from "./components/Navbar"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Team from './components/Team'
import Donate from './components/Donate'
import Info from './components/Info'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Box>
        <Navbar/>
      </Box>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
