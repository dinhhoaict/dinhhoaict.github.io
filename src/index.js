import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import React from "react";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from "./reducers";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

var store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));
console.log("Store: ", store);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        , document.getElementById('root'));
registerServiceWorker();
