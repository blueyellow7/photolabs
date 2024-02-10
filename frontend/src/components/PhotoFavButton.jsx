import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ photoId, likesArray, handleLikesArray }) {
  return (
    <div className="photo-list__fav-icon" 
      onClick={() => {
        {/* handleLikesArray adds and removes photoId from likesArray when button is clicked */} 
        handleLikesArray(photoId)
      }}
    >
      <div className="photo-list__fav-icon-svg">
        {/* toggle FavIcon colour using likesArray. photoId in/not in array: selected = true/false */}
        <FavIcon selected={likesArray.includes(photoId)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;