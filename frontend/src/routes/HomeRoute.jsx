import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ topics, photos, likesArray, handleLikesArray, handleModalView, handleSelectedPhoto, handleSelectedTopic, goToHomePage }) => {
  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}
        likesArray={likesArray}
        handleSelectedTopic={handleSelectedTopic}
        goToHomePage={goToHomePage} 
      />
      
      <PhotoList 
        photos={photos}
        likesArray={likesArray} handleLikesArray={handleLikesArray}
        handleModalView={handleModalView}
        handleSelectedPhoto={handleSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
