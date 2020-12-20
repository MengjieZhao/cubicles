import React from 'react';
import './Employee.css';

function Employee({ id }){
    return(
      <div className="employee" >
        <p>{id}</p>
        <div className="status" style={{backgroundColor: 'green'}}/>
      </div>
    )
}

export default Employee;