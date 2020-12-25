import React,{Component} from 'react';
import classes from  './Person.css';

class Person extends Component{
    render (props){
        return (
        <div className={classes.person}>
            <p>My name is {this.props.name} and I'm {this.props.age} years old also from {this.props.country}.</p>
            <p>{this.props.children}</p>
            <div className={classes.nameInput}>
                <input type="text" onChange={this.props.change}  value={this.props.value}></input> 
                <button onClick={this.props.click}>Delete</button>     
            </div> 
        </div>
        )
    }
}

export default Person;