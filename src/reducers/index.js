import { combineReducers } from "redux";
import {myReducer, myReducer2} from "../home/reducer";

export default combineReducers({ t1: myReducer, t2:myReducer2});