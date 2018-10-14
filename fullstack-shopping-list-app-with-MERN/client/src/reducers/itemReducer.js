import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from '../actions/types';


//so in './index.js/', that "item" represents this initialState
const initialState = {
    // items:[
    //     { id:uuid(), name:'Eggs'},
    //     { id:uuid(), name:'Milk'},
    //     { id:uuid(), name:'Steak'},
    //     { id:uuid(), name:'Candy'}
    // ]

    //before connecting to back end, hard-coded initial data was used 
    //now we make request get data
    
    items:[],
    loading: false
}

//2.Reducer
//Reducer is an agent, does what you tell it.
// you need 2 things to have a reducer
//It requires a state
//It requires an action

export default  (state = initialState, action)=>{
    switch(action.type){//the reducer is going to find the action in '../actions/types'
        case GET_ITEMS:
        return {
            ...state,
            items:action.payload,
            loading:false
        }
        case DELETE_ITEM:
            return{
            ...state,
            items:state.items.filter(item => item._id !== action.payload)
        }
        case ADD_ITEM:
            return{
            ...state,
            items:[action.payload, ...state.items]
            //we cannot mutate the state, 
            //so we creat a copy of it and add the new item in the front
        }
        case ITEMS_LOADING:
            return{
            ...state,
            loading:true
        }
        default:
        return state;
    }
}