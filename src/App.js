import React, {Component} from 'react';
import {  Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './Components/AboutMe';
import Content from './Components/Content';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import { RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/about' element={AboutMe} />
      <Route path='/content' element={Content} />
    </Route>
  )
)

class App extends Component{
  render(){
    return(
      <RouterProvider router={router} />
    );
  }
}

export default App;
