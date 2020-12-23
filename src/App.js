import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components'; 

class App extends Component{
  state = {
    persons:[
      {id: 'asdf1' , name:"Ismaeel", age:22 , country:"Bahrain"},
      {id: 'asdf2' , name:"Madal", age:26 , country:"Iran"},
      {id: 'asdf3' , name:"Kal Madal", age:26 , country:"Malacha"}
    ],
    showPerson:false
  }

  togglePerson = () =>{
    const showperson = this.state.showPerson;
    this.setState({showPerson : !showperson})
  }

  deletePerson = (index) =>{
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  changeName = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  render(){

    const ButtonStyle = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    padding:5px;
    cursor:pointer;
    font:inherit;
    color:white;
    &:hover {
      background-color: ${props => props.alt ? 'brown' : 'lightgreen'};
      color:${props => props.alt ? 'white' : 'black'};
    }`;


    let person = null;

    if (this.state.showPerson){
      person = ( 
        this.state.persons.map((person,index) => {
          return <Person 
            name={person.name} 
            age={person.age} 
            key={person.id}
            click={()=>this.deletePerson(index)}
            change={(event)=>this.changeName(event,person.id)}/>
        }))
        // ButtonStyle.backgroundolor = 'red';
        // ButtonStyle[':hover'] = {
        //   backgroundColor: 'brown'
        // };        
      }


      const classes = [];
      if(this.state.persons.length === 1){
        classes.push('red');
      }
      if(this.state.persons.length <= 2){
        classes.push('bold');
      }

                /* <Person name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          country={this.state.persons[0].country}  
          value={this.state.persons[0].name}
          />
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          country={this.state.persons[1].country}
          click={this.changeNameHandler.bind(this,'shamsi')}
          value={this.state.persons[1].name}d
          >My career:Develoer</Person> */

    return(
        <div className="App">
          <h1>Hello Fuckers</h1>
          <p>Hello from malacha</p>
          <p className={classes.join(' ')}>Hello to Fuckers</p>
          <ButtonStyle onClick={this.togglePerson} alt={this.state.showPerson}>Click it Fucker</ButtonStyle>
          {person}
        </div>
    );
  }
}

export default App;
