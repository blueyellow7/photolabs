import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike((like) => !like)
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleLike}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={like}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;