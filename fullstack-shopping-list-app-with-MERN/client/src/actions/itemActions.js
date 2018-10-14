import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from '../actions/types';
import axios from 'axios';
///Reducer will come here to look for getItems, etc

export const getItems = () => dispatch =>{
    dispatch(setItemsLoading());
    axios.get('/api/items')
        .then(res=> 
            dispatch({
                type:GET_ITEMS,
                payload:res.data
            }))
}
export const addItem = item =>dispatch =>{
    // return {
    //     type:ADD_ITEM,
    //     payload:item
    //     }
    axios.post('/api/items',item)
        .then(res =>
            dispatch({
            type:ADD_ITEM,
            payload:res.data
        })
        )
}
export const deleteItem = id => dispatch=>{
    // return {
    //     type:DELETE_ITEM,
    //     payload:id
    // }

    axios.delete(`api/items/${id}`)
        .then(res=>{
            dispatch({
                type:DELETE_ITEM,
                payload:id
            })
        })
}
export const setItemsLoading = () =>{
    return {
        type: ITEMS_LOADING
    }
}
