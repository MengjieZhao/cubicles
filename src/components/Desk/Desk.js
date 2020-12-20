import React from 'react';
import './Desk.css';
import PropTypes from 'prop-types';
import desktop from '../../statics/desktop.svg';

// eslint-disable-next-line no-unused-vars
function Desk({ id }) {
  return (
    <div className="desk">
      <img className="desk_img" src={desktop} alt="desk" />
    </div>

  );
}

Desk.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Desk;
