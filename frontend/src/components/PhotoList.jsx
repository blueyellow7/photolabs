import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "components/PhotoListItem.jsx";

const PhotoList = ({ photos, likesArray, likesStoringFunction, showModal, handleShowModal, selectedPhoto, handleSelectedPhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => { 
        return <li key={photo.id}>
        <PhotoListItem 
          photoId={photo.id}
          regularPhoto={photo.urls.regular}
          profilePhoto={photo.user.profile}
          username={photo.user.username}
          location={photo.location}
          likesArray={likesArray} likesStoringFunction={likesStoringFunction}
          showModal={showModal} handleShowModal={handleShowModal}
          selectedPhoto={selectedPhoto} handleSelectedPhoto={handleSelectedPhoto}
        />
        </li>})}
    </ul>
  );
};

export default PhotoList;
