import React from 'react';
import './CoffeeArea.css';
import coffee from '../../statics/coffee.svg';

function CoffeeArea() {
  return(
    <div className="coffee" >
      <img className="img" src={coffee}/>
      <h1 style={{ color: '#2E2E2E' }}>Coffee Area</h1>
    </div>
  )
}


export default CoffeeArea;