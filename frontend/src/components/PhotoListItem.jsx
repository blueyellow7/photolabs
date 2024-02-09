import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={props.photoData.urls.regular} alt="Photo" className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={props.photoData.user.profile} alt="Profile" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          {props.photoData.user.username}
          <p className="photo-list__user-location">{props.photoData.location.city}, {props.photoData.location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
