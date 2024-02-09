import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ photoId, likesArray, likesStoringFunction }) {
  // Initialize 'like' state based on whether 'photoId' is in likesArray
  const [like, setLike] = useState(likesArray.includes(photoId));
  const handleLike = () => {
    setLike((prevlike) => !prevlike)
  };

  return (
    <div className="photo-list__fav-icon" 
      onClick={() => { 
        handleLike()
        likesStoringFunction(photoId)
      }}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={like}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;