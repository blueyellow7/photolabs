import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ photoId, likesArray, likesStoringFunction }) {
  return (
    <div className="photo-list__fav-icon" 
      onClick={() => {
        {/* likesStoringFunction adds and removes photoId from likesArray when like button is clicked */} 
        likesStoringFunction(photoId)
      }}
    >
      <div className="photo-list__fav-icon-svg">
        {/* toggle FavIcon colour based on likesArray state (ie: check if photoId is in array or not. 
          not in array = selected = false, in array = selected = true) */}
        <FavIcon selected={likesArray.includes(photoId)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;