import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './Components/Greeting'
import AboutMe from './Components/AboutMe';
import Content from './Components/Content';
import Footer from './Components/Footer';
import ParentComponent from './Components/ParentComponent';

class App extends Component{
  render(){
    return(
      <div>
        <Greeting />
        <ParentComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
