import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ likesArray, likesStoringFunction, showModal, handleShowModal, selectedPhoto, handleSelectedPhoto }) => {
  return (
    <div className="photo-details-modal">
      <button onClick={handleShowModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol"/>
      </button>

      <img className="photo-details-modal__image" src={selectedPhoto.urls.full} alt="full photo"/>
      
      <div className="photo-details-modal__photographer-details">
        <img src={selectedPhoto.user.profile} alt="Profile" className="photo-details-modal__photographer-profile"/>
        <div className="photo-details-modal__photographer-info">
          {selectedPhoto.user.name}
          <p className="photo-details-modal__photographer-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</p>
        </div>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;