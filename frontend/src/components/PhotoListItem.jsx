import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className ="photo-list__item">
      <img src={props.photo.imageSource} alt="Photo"/> <br/>
      <img src={props.photo.profile} alt="Profile"/> <br/>
      {props.photo.username} <br/>
      {props.photo.location.city}, {props.photo.location.country}
    </div>
  )
};

export default PhotoListItem;
