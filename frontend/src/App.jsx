import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {

  // the handleShowModal function will be passed to an onClick listener for PhotoItemList image; when the photo is clicked, handleShowModal will change showModal state to 'true'
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => { 
    setShowModal(prev => !prev)
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} showModal={showModal} handleShowModal={handleShowModal} />

      {/* only if 'showModal' state = true, render PhotoDetailsModal */}
      { showModal && <PhotoDetailsModal /> }

    </div>
  );
};

export default App;
