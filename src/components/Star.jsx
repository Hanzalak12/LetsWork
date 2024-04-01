// Star.js
import React from 'react';

const Star = ({ value }) => {
  const stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(<i class="fa fa-star"></i>);
  }
  return <span class="stars">{stars}</span>;
};

export default Star;
