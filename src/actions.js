import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';


//CREATE OUR ACTION
//wrap in () so can avoid return statement (just returning an object)
//takes text and returns an object with a type of change_search_field and send whatever data is needed to go on to reducer
export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIELD,
        payload: text
})

//function to deal with async in redux
//create a higher order function. thunk provides dispatch function to the second layer function
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}