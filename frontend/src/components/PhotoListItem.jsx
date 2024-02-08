import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <>
      <img src={props.photo.imageSource} alt="Photo"/> <br/>
      <img src={props.photo.profile} alt="Profile"/> <br/>
      {props.photo.username} <br/>
      {props.photo.location.city}, {props.photo.location.country}
    </>
  )
};

export default PhotoListItem;
