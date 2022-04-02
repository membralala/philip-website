import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Home from './Home';
import About from './About';
import Music from './Music';
import Code from './Code';
import Projects from './Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App title="" content={<Home />} />} />
        <Route path="/about" element={<App title="About" content={<About />} />} />
        <Route path="/music" element={<App title="Music" content={<Music />} />} />
        <Route path="/code" element={<App title="Code" content={<Code />} />} />
        <Route path="/projects" element={<App title="Projects" content={<Projects />} />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);