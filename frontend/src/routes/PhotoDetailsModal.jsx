import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ showModal, handleShowModal, selectedPhoto, handleSelectedPhoto }) => {
  console.log("Display contents of selected photo:", selectedPhoto)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleShowModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
