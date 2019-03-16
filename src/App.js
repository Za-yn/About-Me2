import React, { Component } from 'react';
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import Resume from 'react-awesome-resume'
import logo from './logo.svg';
import './App.css';

const myJSONResume = "../public/resume.json";

class App extends Component {
  render() {
    return (
      ReactDOM.render(
        <Resume person={myJSONResume} theme="default" />,
        document.getElementById("root")
      )
    );
  }
}

export default App;
