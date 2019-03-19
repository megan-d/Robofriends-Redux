import { CHANGE_SEARCH_FIELD } from './constants.js';


//CREATE OUR ACTION
//wrap in () so can avoid return statement (just returning an object)
//takes text and returns an object with a type of change_search_field and send whatever data is needed to go on to reducer
export const setSearchField = (text) => {
    console.log(text);
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    
}