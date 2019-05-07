var initState = {
	status : false,
	data : []
}

var initState2 = {
	status : true,
	data : [1]
}


export function myReducer(state = initState, action){
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


export function myReducer2(state = initState2, action){
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