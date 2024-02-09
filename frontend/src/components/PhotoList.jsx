import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "components/PhotoListItem.jsx";

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return <li key={photo.id}><PhotoListItem photoData={photo} /></li>
      } )}
    </ul>
  );
};

export default PhotoList;
