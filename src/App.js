import React, {Component} from 'react';
import './assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Temp from './features/projects/components/temp';
import RootLayout from './layouts/rootLayout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Project from './features/projects/components/project';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Temp />} />
          <Route path="/projects/:id" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
