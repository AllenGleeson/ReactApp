import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Components/Content';
import AboutMe from './Components/AboutMe';
import RootLayout from './Layouts/RootLayout';

import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/content" element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
