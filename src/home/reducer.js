export function visibilityFilter(state = 'SHOW_ALL', action) {
	if(action.type == 'SET_VISIBILITY_FILTER'){
		return action.filter;
	}else{
		return state;
	}
}

export function todo(state = [], action){
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat([{text: action.text, complete: false}]);
		case 'TOGGLE_TODO':
			return state.map((todo, index) =>
				action.index == index ? {...todo, complete: !todo.complete} : todo);
	
		default:
			break;
	}
}