import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoListItem = ({ photoId, regularPhoto, profilePhoto, name, location, likesArray, likesStoringFunction, showModal, handleShowModal, selectedPhoto, handleSelectedPhoto }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={photoId} likesArray={likesArray} likesStoringFunction={likesStoringFunction} />

      <img 
        src={regularPhoto} alt="Photo" className="photo-list__image"
        onClick={() => { 
          handleShowModal()
          handleSelectedPhoto(photoId)
        }}
      />
      
      <div className="photo-list__user-details">
        <img src={profilePhoto} alt="Profile" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          {name}
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
      
    </div>
  )
};

export default PhotoListItem;
