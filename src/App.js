import React, { Component } from 'react';
import Resume from 'react-awesome-resume'
import Person from './resume.json';
import 'semantic-ui-css/semantic.min.css';
//import './App.css';

class App extends Component {
  render() {
    return (
      <Resume jsonResume = {Person} theme = "default"/>
    );
  }
}

export default App;
