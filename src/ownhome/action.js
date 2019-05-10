import axios from 'axios';

export const OWNHOME_ADD_MENU = {
    type: "OWNHOME_ADD_MENU",
    payload: ""
};


export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILED = 'FETCHING_DATA_FAILED';


export function getData(){
    return {
        type: FETCHING_DATA
    }
}

export function getDataSuccess(data){
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export function getDataFailed(data){
    return {
        type: FETCHING_DATA_FAILED,
    }
}

const url = "https://www.reddit.com/r/dota2.json";
export function fetchingData(){
    return async function(dispatch){
        try {
            dispatch(getData());
            var res = await axios.get(url);
            console.log("data: ", res.data, " ", typeof res.data);
            dispatch(getDataSuccess(res.data));
    
        } catch (error) {
            console.log(error);
            dispatch(getDataFailed(error));
        }
    }
    
}