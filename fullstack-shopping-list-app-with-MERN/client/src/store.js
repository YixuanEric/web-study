import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


//1.Store 
// Basically you just need to have a store
// you need 2 things to create a store
//It requires a reducer, 
//It requires a state;

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState,
    compose(
    applyMiddleware(...middleware),
    
    //this double underscore shit is copied from redux documentation, don't get this wrong
    )
);

export default store;