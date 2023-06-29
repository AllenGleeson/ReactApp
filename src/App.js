import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './Components/AboutMe';
import Content from './Components/Content';
import RootLayout from './Layouts/RootLayout';
import { RouterProvider, Router, Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about" element={<Content />} />
      </Route>
  )
)

function App(){
  return(
    <RouterProvider router={router} />
  );
};


export default App;
