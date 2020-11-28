import React from 'react';
import './Employee.css';


function Employee({ id }){
    return(
        <div className="employee">
            <p className="text">{id}</p>
        </div>
    )
}

export default Employee;