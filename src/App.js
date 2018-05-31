import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from "react-router-dom";
import PropTypes from "prop-types";
import About from "./About";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
        </nav>
        <div>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </div>
      </div>
    );
  }
}

export default App;
