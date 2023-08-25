import React from 'react';
import './assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import ProjectPage from './pages/projects';
import RootLayout from './layouts/rootLayout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Project from './features/projects/components/project';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/:id" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
