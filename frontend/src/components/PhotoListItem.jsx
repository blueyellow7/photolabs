import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={props.photoData.imageSource} alt="Photo" className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={props.photoData.profile} alt="Profile" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          {props.photoData.username}
          <p className="photo-list__user-location">{props.photoData.location.city}, {props.photoData.location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
