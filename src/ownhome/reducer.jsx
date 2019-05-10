import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILED } from "./action";

var init_state = {
    menu:    ["Home", "About", "Skill", "Experience", "Contact"]
};
export function menu_bar(state = init_state, action){
    switch(action.type){
        case "OWNHOME_ADD_MENU": {
            let newState = {...state};
            newState.menu = newState.menu.concat(["Test"]);
            return newState;
        }
        default:
            return state;
    }
}

const init_reddit_data = {
    data: [],
    isDataFetched : false,
    isFetching : false,
    error : false
}

export function redditData(state = init_reddit_data, action){
    switch(action.type){
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFetching: false,
                isDataFetched: true
            };
        case FETCHING_DATA_FAILED:
            return {
                ...state,
                data: [],
                error: true,
                isFetching: false

            };
        default:
            return state;
    }
}