import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ likesArray, selected, handleAllLikedPhotos }) => {
  return (
    <div className='fav-badge' 
        onClick={() => {
          if(likesArray.length > 0) { 
            handleAllLikedPhotos(likesArray) 
          }
        }}>
      <FavIcon displayAlert={!!likesArray.length} selected={selected}/>
    </div>
  ); 
};

export default FavBadge;