import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './Components/Greeting'
import AboutMe from './Components/AboutMe';

class App extends Component{
  render(){
    return(
      <div>
        <Greeting />
        <AboutMe />
      </div>
    );
  }
}

export default App;
