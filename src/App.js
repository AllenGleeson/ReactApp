import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Temp from './Components/Temp';
import RootLayout from './Layouts/RootLayout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ParentComponent from './Components/ParentComponent';


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ParentComponent />} />
          <Route path="/shop" element={<Temp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
