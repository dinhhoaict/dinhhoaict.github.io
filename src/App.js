import React from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Blog from './blog/Blog';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div>
					<Route path="/about" component={About} />
					<Route path="/blog" component={Blog} />
					<Route exact path="/" component={Home} />
				</div>
			</div>
		);
	}
}

export default App;
