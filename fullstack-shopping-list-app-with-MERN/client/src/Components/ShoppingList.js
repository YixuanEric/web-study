import React, {Component} from 'react';
import {
    Container, 
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import {
    CSSTransition, TransitionGroup
} from 'react-transition-group';

import {connect} from 'react-redux';
import {getItems,deleteItem,addItem} from '../actions/itemActions'
import PropTypes from 'prop-types'

class ShoppingList extends Component {
    // state = {
    //     items: [
    //         {id:uuid(),name:'Eggs'},
    //         {id:uuid(),name:'Milk'},
    //         {id:uuid(),name:'Cereal'},
    //         {id:uuid(),name:'Water'},
    //     ]
    // }
    ///////////////////////////

    //the data was hard coded here to display on the page
    //But now because using Redux so the data is no longer need to hard coded in Components
    //the data is now in '../reducers/itemReducer.js'

    componentDidMount(){
        this.props.getItems();
        //this.props is taken care of by mapStateToProps at the bottom 
    }

    onDeleteClick = id =>{
        this.props.deleteItem(id);
    }

    render(){
        
        //const {items} = this.state; 
        //before redux it was distructing from the data that is hard coded in the //Component State

        const {items} = this.props.item;//using redux
        //this.props is taken care of by mapStateToProps at the bottom 

        return(
            <Container>

                <ListGroup>
                    <TransitionGroup className="Shopping-list">
                        {items.map(({_id,name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this,_id)}//pass the id to delete
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}
// export default ShoppingList; // this line is before using redux

//use proptypes to check types
ShoppingList.propTypes = {
    getItems:PropTypes.func.isRequred,
    item:PropTypes.object.isRequred
}


//using redux
const mapStateToProps = (state)=>({
    item:state.item
    //Here !!
    //the state now is the from redux's global state, go check '../reducers/index.js/' 
    //state.item is that hard-coded json data array!
    //so this mapStateToProps will make the state from redux become the this Component's
    //property
})
export default connect(mapStateToProps,{getItems,deleteItem,addItem})(ShoppingList)

//Redux has 4 steps

//1.Store 
// Basically you just need to have a store
// you need 2 things to have a store
//It requires a reducer, 
//It requires a state;

//2.Reducer
//Reducer is an agent, does what you tell it.
// you need 2 things to have a reducer
//It requires a state
//It requires an action

//3.Subscribe
//get the current state

//4.Dispatch
//