import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoListItem = ({ photo, likesArray, handleLikesArray, handleModalView, handleSelectedPhoto }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photoId={photo.id}
        likesArray={likesArray}
        handleLikesArray={handleLikesArray} 
      />

      <img 
        src={photo.urls.regular} alt="Photo" className="photo-list__image"
        onClick={ () => { 
          handleModalView();
          handleSelectedPhoto(photo.id);
        } }
      />
      
      <div className="photo-list__user-details">
        <img src={photo.user.profile} alt="Profile" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          {photo.user.name}
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
      
    </div>
  );
};

export default PhotoListItem;
