import { CHANGE_SEARCH_FIELD } from './constants.js';

//set initial state for blank searchfield
const initialState = {
    searchField: ''
}

//create the reducer
//give default parameters for state and action
export const searchRobots = (state=initialState, action={}) => {
    //act upon state
    //action.type is from action.js file
    console.log(action.type);
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: 
            //return a new state - doesn't modify existing it creates entirely new object. can also do this using spread operator
            return Object.assign({}, state, {searchField: action.payload});
        default: 
            return state;
    }
}