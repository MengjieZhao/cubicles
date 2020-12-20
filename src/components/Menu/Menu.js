import React from 'react';
import menu from '../../statics/menu.svg';
import './Menu.css';

function Menu() {
  return (
    <div className="Menu">
      <img className="menu_img" src={menu} alt="menu" />
    </div>
  );
}

export default Menu;
