import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';

class Index extends Component {
  render() {
    return ('Simple attendance app');
  }
}

const wrapper = document.getElementById('root_attendance');
wrapper ? ReactDOM.render(<Index />, wrapper) : false;
