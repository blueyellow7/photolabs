import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "components/PhotoListItem.jsx";

const PhotoList = ({ photos, likesArray, handleLikesArray, handleModalView, handleSelectedPhoto }) => {
  return ( 
      <ul className="photo-list">
      {photos.map((photo) => { 
        return <li key={photo.id}>
        <PhotoListItem 
          photo={photo}
          likesArray={likesArray}
          handleLikesArray={handleLikesArray}
          handleModalView={handleModalView}
          handleSelectedPhoto={handleSelectedPhoto}
        />
        </li>})}
      </ul>
  );
};

export default PhotoList;
