import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = ({ likesArray, handleLikesArray, handleModalView, selectedPhoto, handleSelectedPhoto }) => {
  return (
    <div className="photo-details-modal">
      <button onClick={handleModalView} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol"/>
      </button>

      <PhotoFavButton
        photoId={selectedPhoto.id}
        likesArray={likesArray}
        handleLikesArray={handleLikesArray}
      />
      
      <img className="photo-details-modal__image photo-details-modal__top-bar" src={selectedPhoto.urls.full} alt="full photo"/>

      <div className="photo-details-modal__photographer-details">
        <img src={selectedPhoto.user.profile} alt="Profile" className="photo-details-modal__photographer-profile"/>
        <div className="photo-details-modal__photographer-info">
          {selectedPhoto.user.name}
          <p className="photo-details-modal__photographer-location">
            {selectedPhoto.location.city}, {selectedPhoto.location.country}
          </p>
        </div>
      </div>

      <p className="photo-details-modal__header">Similar Photos</p>
      <PhotoList 
        photos={selectedPhoto.similar_photos}
        likesArray={likesArray} handleLikesArray={handleLikesArray}
        handleModalView={handleModalView}
        handleSelectedPhoto={handleSelectedPhoto}
      />
    </div>
  );
};

export default PhotoDetailsModal;