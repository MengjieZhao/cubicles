import React from 'react';
import './CoffeeArea.css';
import coffee from '../../statics/coffee.svg';

function CoffeeArea() {
  return(
    <div className="coffee" >
      <img className="img" src={coffee}/>
      <h1>Coffee Area</h1>
    </div>
  )
}


export default CoffeeArea;