import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import classes from './App.css'

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


    let person = null;

    if (this.state.showPerson){
      // if(this.state.persons.length <= 2){
      //   assignClasses.push(classes.red);
      // }
      // if(this.state.persons.length <= 1){
      //   assignClasses.push(classes.bold);
      // }
      person = (
      <div>
        <Persons 
        persons={this.state.persons}
        clicked={this.deletePerson}
        changed={this.changeName}
      />
      </div>)
    
        // btnClass = classes.Red;   
      }

    return(
        <div className={classes.App}>
          <Cockpit 
          clicked={this.togglePerson} 
          show={this.state.showPerson} 
          person={this.state.persons}/>
          {person}
        </div>
    );
  }
}

export default App;
