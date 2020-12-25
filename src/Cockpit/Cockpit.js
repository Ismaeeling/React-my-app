import React from 'react';
import classes from './Cockpit.css';


const Cockpit = (props) =>{
    let btnClass = '';
    let assignClasses = [];

    if(props.person.length <= 2){
        assignClasses.push(classes.red);
    }
    if(props.person.length <= 1){
        assignClasses.push(classes.bold);
    }
    if(props.show){
        btnClass = classes.Red
    }
    return(
        <div className={classes.Cockpit}>
          <h1>Hello Fuckers</h1>
          <p className={assignClasses.join(' ')}>Hello to Fuckers</p>
          <button className={btnClass} onClick={props.clicked} >Click it Fucker</button>
        </div>
    )
}

export default Cockpit;