import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {
  
  const [likesArray, setLikesArray] = useState([]);
  const handleLikesArray = (photoId) => {
    setLikesArray((prev) => {
      // first condition: handleLikesArray is called when like button is clicked. if id already exists in array, that means the photo was UNliked (as id was previously liked and added). Now id needs to be removed from array. remove id using filter: return new array containing all items from prev that =/= photoId
      // second condition:  If the ID is not in the array, add it and return the new array
      return prev.includes(photoId) ? prev.filter(id => id !== photoId) : prev = [...prev, photoId];

    })
  }

  // pass down handleShowModal to the onClick listener in the PhotoItemList image, and the PhotoDetailModal [x] button. when photo is clicked, handleShowModal will change showModal state to 'true'. when [x] is clicked it will change to 'false'
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => { 
    setShowModal(prev => !prev)
  }

  // pass down the handleSelectedPhoto function to the onClick listener in PhotoItemList. use the photoId data available in PhotoItemList as the arguement. function will change the selectedPhoto state to return the respective photo object.
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const handleSelectedPhoto = (selectedId) => {
    setSelectedPhoto((prev) => {
      prev = photos.find((photo) => photo.id === selectedId);
      return prev;
    })
  }

  return (
    <div className="App">
      <HomeRoute 
        photos={photos}
        topics={topics}
        likesArray={likesArray} handleLikesArray={handleLikesArray}
        showModal={showModal} handleShowModal={handleShowModal}
        selectedPhoto={selectedPhoto} handleSelectedPhoto={handleSelectedPhoto}
      />

      {/* only if 'showModal' state = true, render PhotoDetailsModal */}
      { showModal && <PhotoDetailsModal
                        likesArray={likesArray} handleLikesArray={handleLikesArray} 
                        showModal={showModal} handleShowModal={handleShowModal}
                        selectedPhoto={selectedPhoto} handleSelectedPhoto={handleSelectedPhoto}
                      /> 
      }

    </div>
  );
};

export default App;
