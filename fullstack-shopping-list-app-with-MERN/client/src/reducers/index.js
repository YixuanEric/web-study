import {combineReducers} from 'redux';
import itemReducer from './itemReducer';


//CombineReducers takes an object of reducers and returns a reducer. 
//The resulting reducer represents an object of the same shape as the object.


export default combineReducers({
    item: itemReducer

    //itemReducer is from itemReducer.js and now this item will represents the initialState
    
    //in that file, which is "items" -> the hard-coded json data array
})


//and this combineReducer will produce an object like this 
//  {item:items:[
    //  { id:uuid(), name:'Eggs'},
    //  { id:uuid(), name:'Milk'},
    //  { id:uuid(), name:'Steak'},
    //  { id:uuid(), name:'Candy'}
    //  ]}
