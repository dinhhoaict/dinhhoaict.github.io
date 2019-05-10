import React from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";
import Sidebar from './home/sidebar';
import Main from "./home/main";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import OwnHome from "./ownhome/ownhome";
import NavBar from "./ownhome/navbar";

// const store = createStore(rootReducer); // Khởi tạo store

// console.log('Default:', store.getState());

// var action2 = { type : 'ADD_NEW'};
// store.dispatch(action2);
// store.dispatch(action2);
// store.dispatch(action2);
// store.dispatch(action2);
// console.log('Default:', store.getState());
class App extends React.Component {
	render() {
		return (
			<div>
				{/* <Sidebar></Sidebar>
				<Main></Main> */}
				<NavBar></NavBar>
				<OwnHome></OwnHome>
				
			</div>
		);
	}
}

export default App;
