import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  

  render() {
   
    let todoItems;
    console.log(this.props.todos);
    if(this.props.todos){
      todoItems = this.props.todos.map(todo =>{
      return (
        <TodoItem key={todo.title} todo={todo} />
      )
    })
  }
    return (
      <div className="Todos">
      <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}


export default Todos;
