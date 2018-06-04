import React from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

class App extends React.Component {
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
