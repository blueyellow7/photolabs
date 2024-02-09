import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoListItem = ({ photoId, regularPhoto, profilePhoto, username, location }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />

      <img src={regularPhoto} alt="Photo" className="photo-list__image"/>
      
      <div className="photo-list__user-details">
        <img src={profilePhoto} alt="Profile" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          {username}
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
      
    </div>
  )
};

export default PhotoListItem;
