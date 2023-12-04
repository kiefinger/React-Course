import React from 'react';

import classes from './Card.css';

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>{props.children}</div>
  );
};

export default Card;
