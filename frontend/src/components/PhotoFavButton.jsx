import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ photoId, likesArray, likesStoringFunction }) {
  const [like, setLike] = useState();
  const handleLike = () => {
    setLike((like) => !like)
  };

  return (
    <div className="photo-list__fav-icon" 
      onClick={() => { 
        handleLike()
        
        if (!like) {
          likesStoringFunction(photoId)
        }
      }}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={like}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;