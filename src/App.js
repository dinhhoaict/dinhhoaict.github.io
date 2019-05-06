import React from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";
import Sidebar from './home/sidebar';
import Main from "./home/main";
import { createStore } from "redux";

var initState = {
	status : false
}

function myReducer(state = initState, action){
	switch (action.type) {
		case 'CHANGE_STATUS':
			{
				let newState = {status : !state.status};
				return newState;
			}
		default:
			return state;
	}
}

const store = createStore(myReducer); // Khởi tạo store

console.log('Default:', store.getState());


// Thuc hien cong viec thay doi status
var action = { type : 'CHANGE_STATUS'};
store.dispatch(action);
console.log('Default:', store.getState());
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
