import React, { Component } from 'react';
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import Resume from 'react-awesome-resume'
import logo from './logo.svg';
import './App.css';

var user;
$.getJSON("../public/resume.json", function(json){
    user = json;
});

const myJSONResume = ({ user });

class App extends Component {
  render() {
    return (
      <Resume person={myJSONResume} theme="default" />
    );
  }
}

export default App;
