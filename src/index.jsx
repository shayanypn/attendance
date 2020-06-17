import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from './containers/Home/index.jsx';
import './styles/index.scss';

class Index extends Component {
  render() {
    return (<Home />);
  }
}

const wrapper = document.getElementById('root_attendance');
wrapper ? ReactDOM.render(<Index />, wrapper) : false;
