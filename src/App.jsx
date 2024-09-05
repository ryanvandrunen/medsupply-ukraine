import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Donate from "./components/Donate";
import Info from "./components/Info";
import Footer from "./components/Footer";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>

      <Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
