import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, likesArray, handleSelectedTopic, goToHomePage, handleAllLikedPhotos }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={goToHomePage}>PhotoLabs</span>
      <TopicList topics={topics} handleSelectedTopic={handleSelectedTopic} />
      <FavBadge selected={true} likesArray={likesArray} handleAllLikedPhotos={handleAllLikedPhotos} />
    </div>
  );
};

export default TopNavigation;