import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </Router>
  );
};

export default App;
