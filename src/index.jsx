import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import './index.css';
import App from './components/App';

import { works } from "./data/works";
import { projects } from "./data/projects";

import About from './pages/About';
import Code from './Code';
import Kollektiv42 from './pages/Kollektiv42';
import Events from './pages/Events';
import NotFound from './pages/NotFound';
import { Works, WorksList, WorksDetail } from "./pages/Works";
import { Projects, ProjectsList, ProjectsDetail } from './pages/Projects';


ReactDOM.render(
  <React.StrictMode>
    <App>
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} >
          {
            works.map((elem) => {
              return (
              <Route key={elem.id} path={elem.slug} element={<WorksDetail element={elem} />} />
            )})
          }
          <Route exact path="" element={<WorksList/>} />
        </Route>
        <Route path="/code" element={<Code />} />
        <Route path="/projects" element={<Projects />} >
          {
            projects.map((elem) => {
              return (
                <Route key={elem.id} path={elem.slug} element={<ProjectsDetail element={elem} />} />
            )})
          }
          <Route exact path="" element={<ProjectsList />}/>
        </Route>
        <Route path="/kollektiv-42" element={<Kollektiv42 />} />
        <Route path="/events" element={<Events />}/>
        <Route exact path="/" element={<Navigate to="/about" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);