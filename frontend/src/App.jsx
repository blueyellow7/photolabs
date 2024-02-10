import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {

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
        showModal={showModal} handleShowModal={handleShowModal}
        selectedPhoto={selectedPhoto} handleSelectedPhoto={handleSelectedPhoto}
      />

      {/* only if 'showModal' state = true, render PhotoDetailsModal */}
      { showModal && <PhotoDetailsModal 
                        showModal={showModal} handleShowModal={handleShowModal}
                        selectedPhoto={selectedPhoto} handleSelectedPhoto={handleSelectedPhoto}
                      /> 
      }

    </div>
  );
};

export default App;
