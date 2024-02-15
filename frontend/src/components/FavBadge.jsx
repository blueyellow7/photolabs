import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ likesArray, selected }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!likesArray.length} selected={selected}/>
    </div>
  ); 
};

export default FavBadge;