import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ topics, photos, likesArray, handleLikesArray, showModal, handleShowModal, selectedPhoto, handleSelectedPhoto }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} likesArray={likesArray} />
      <PhotoList 
        photos={photos}
        likesArray={likesArray} handleLikesArray={handleLikesArray}
        showModal={showModal} handleShowModal={handleShowModal}
        selectedPhoto={selectedPhoto} handleSelectedPhoto={handleSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
