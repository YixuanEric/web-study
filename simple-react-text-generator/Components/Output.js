import React, {Component} from 'react';

class Output extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }

    
    render(){
        
        
        // let text;
        // if(this.props.value){
        //     text = this.props.value.map(para =>{
        //         return(
        //             <p key={Math.random()*999} para={para} />
        //         )
        //     })
        // }
        

        return(
            <div>
                <h1>Paragraphs</h1>
                <hr />
                <div className = "output">{this.props.value}</div>
            </div>
        )
    }
}

export default Output;