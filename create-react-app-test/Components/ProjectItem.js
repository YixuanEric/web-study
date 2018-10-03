import React, { Component } from 'react';

class ProjectItem extends Component {

deleteProject(id){
    // console.log("delete");
    this.props.onDelete();
}

  render() {
    return (
      <li className="Project">
        {this.props.project.id} : {this.props.project.title} : {this.props.project.category} - 
        <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
