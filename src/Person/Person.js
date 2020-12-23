import React,{Component} from 'react';
import './Person.css';
import styled from 'styled-components'

class Person extends Component{
    render (props){
        const DivStyled = styled.div`
            width: 60%;
            margin: 15px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 15px;
            @media (max-width: 500px){
                width:85%;
            }
        `;
        return (
        <DivStyled>
            <p>My name is {this.props.name} and I'm {this.props.age} years old also from {this.props.country}.</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.change}  value={this.props.value}></input>
            <button onClick={this.props.click}>Delete</button>
        </DivStyled>
        )
    }
}

// const Person = (props) =>{
//     return <p>My name is {props.name} and I'm {props.age} years old.</p>
// };

export default Person;