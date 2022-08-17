import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Works from './Works'; 
import Code from './Code';
import Projects from './Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AliceBob from './Works/AliceBob';
import Schmutz from './Works/Schmutz';
import DunklerWald from "./Works/DunklerWald";
import Identity from './Works/Identity';
import OrganicPatterns from "./Works/OrganicPatterns";
import SecretWindow from "./Works/SecretWindow"; 


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />}>
            <Route path="alice-and-bob" element={<AliceBob />} />
            <Route path="schmutz" element={<Schmutz />} />
            <Route path="dunkler-wald" element={<DunklerWald />} />
            <Route path="identity" element={<Identity />} />
            <Route path="organic-patterns" element={<OrganicPatterns />} />
            <Route path="secret-window" element={<SecretWindow />} />
          </Route>
          <Route path="code" element={<Code />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);