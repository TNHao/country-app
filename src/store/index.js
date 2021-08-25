import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import inputReducer from './reducers/inputReducer';
import apiReducer from './reducers/apiReducer';

const rootReducer = combineReducers({
    inputReducer, 
    apiReducer
});

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeEnhencers(applyMiddleware(thunk))
);

export default store;