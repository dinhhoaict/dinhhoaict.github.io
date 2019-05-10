import { combineReducers } from "redux";
import {myReducer, myReducer2} from "../home/reducer";
import { menu_bar, redditData } from "../ownhome/reducer";

export default combineReducers({ 
    ownhome: menu_bar,
    redditData: redditData
});