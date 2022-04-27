import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import About from './About';
import Works from './Works';
import Code from './Code';
import Projects from './Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App title="About" content={<About />} />} />
        <Route path="/about" element={<App title="About" content={<About />} />} />
        <Route path="/works" element={<App title="Works" content={<Works />} />} />
        <Route path="/code" element={<App title="Code" content={<Code />} />} />
        <Route path="/projects" element={<App title="Projects" content={<Projects />} />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);