import React from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";
import Sidebar from './home/sidebar';
import Main from "./home/main";
import { createStore } from "redux";
import rootReducer from "./reducers";

var initState = {
	status : false,
	data : []
}

var initState2 = {
	status : true,
	data : [1]
}

function myReducer(state = initState, action){
	switch (action.type) {
		case 'CHANGE_STATUS':
			{
				let newState = {...state};
				newState.status = !state.status;
				return newState;
			}
		case 'ADD_NEW':
			{
				let newState = Object.assign({}, state);
				newState.status = !state.status;
				newState.data = [...newState.data, !state.status];
				return newState;
			}
		default:
			return state;
	}
}

const store = createStore(rootReducer); // Khởi tạo store

console.log('Default:', store.getState());

var action2 = { type : 'ADD_NEW'};
store.dispatch(action2);
store.dispatch(action2);
store.dispatch(action2);
store.dispatch(action2);
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
