import React, { Fragment } from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <>
      <img src={props.imageSource} alt="Photo"/> <br/>
      <img src={props.profile} alt="Profile"/> <br/>
      {props.username} <br/>
      {props.city}, {props.country}
    </>
  )
};

export default PhotoListItem;
