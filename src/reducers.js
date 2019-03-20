import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

//set initial state for blank searchfield
const initialStateSearch = {
    searchField: ''
}

//create the reducer for searching robots
//give default parameters for state and action
export const searchRobots = (state=initialStateSearch, action={}) => {
    //act upon state
    //action.type is from action.js file
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: 
            //return a new state - doesn't modify existing it creates entirely new object. can also do this using spread operator
            return Object.assign({}, state, {searchField: action.payload});
        default: 
            return state;
    }
}

//create intial state for the request robots
const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

//create new reducer for requesting robots
export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload , isPending: false })
        //always with a reducer want to return the state if it doesn't match any of the criteria
        default:
            return state;
    }
}