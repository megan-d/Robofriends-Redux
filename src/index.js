import React from 'react';
import ReactDOM from 'react-dom';
//import react-redux
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

//use redux logger middleware
const logger = createLogger();

//combine all reducers into combined root reducer
const rootReducer = combineReducers({ searchRobots, requestRobots })

//use the reducers to create the store and apply the thunk and logger middleware
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
                //Provider component passes down the store
                <Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));
                

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();