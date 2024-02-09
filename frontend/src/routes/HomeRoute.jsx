import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ topics, photos }) => {
  const [likesArray, setLikesArray] = useState([]);
  const likesStoringFunction = (photoId) => {
    setLikesArray((prev) => {
      console.log(prev)
      if (prev.includes(photoId)) {
        return prev = [...prev];
      } else {
        return prev = [...prev, photoId];
      }
    })
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} likesArray={likesArray} likesStoringFunction={likesStoringFunction} />
    </div>
  );
};

export default HomeRoute;
