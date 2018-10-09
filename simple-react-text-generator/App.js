import React, { Component } from 'react';
import Output from './Components/Output';
import Text from './Components/Controls/Text';
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      paras: 0,
      text: ''
    }
  }

  componentWillMount(){
    this.getText();
  }

  getText(){
    axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=' + this.state.paras+"&format=html").then(res=>{
      this.setState({text : res.data}, ()=>{
        console.log(this.state);
      })
    }).catch(err =>{
      console.log(err);
    })
  }

  showParas(num){
    this.setState({paras: num}, this.getText);
  }

  render() {
    return (
      <div className="App">
      <h1>React Sample Text Generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Choose Number of Paragraphs</label>
            <Text value = {this.state.paras} onChange ={this.showParas.bind(this)}/>
          </div>
        </form>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
