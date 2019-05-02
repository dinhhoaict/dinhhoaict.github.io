import React from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";
import Sidebar from './home/sidebar';
import Main from "./home/main";

class App extends React.Component {
	render() {
		return (
			<div>
				<Sidebar></Sidebar>
				<Main></Main>
			</div>
		);
	}
}

export default App;
