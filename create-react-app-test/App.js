import React, { Component } from 'react';
import axios from 'axios';
import Projects from './Components/Projects';
import Todos from './Components/Todos';
import AddProject from './Components/AddProject';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects:[],
      todos:[]
    }
  }

  getTodos(){
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res=>{
      this.setState({todos:res.data})
    },()=>{console.log(this.state.todos)})
    .catch(error=>{
      console.log(error);
    })
  }

  getProjects(){
    this.setState({projects:[
      {
        id:uuid.v4(),
        title: 'Learn ES6',
        category:'Web Design'
      },
      {
        id:uuid.v4(),
        title: 'Learm More',
        category:'Web Development'
      },
      {
        id:uuid.v4(),
        title: 'Learn React',
        category:'Mobile Development'
      }
    ]});
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentsDidMount(){
    this.getTodos();
  }


  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects  projects={this.state.projects} onDelete ={this.handleDeleteProject.bind(this)}/>
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
