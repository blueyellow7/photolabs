import React from 'react';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  // custom hook that handles our whole app's state
  const { state:{ likesArray, modalView, selectedPhoto }, handleLikesArray, handleModalView, handleSelectedPhoto } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photos}
        topics={topics}
        likesArray={likesArray} handleLikesArray={handleLikesArray}
        modalView={modalView} handleModalView={handleModalView}
        handleSelectedPhoto={handleSelectedPhoto}
      />

      {/* only if 'ModalView' state = true, render PhotoDetailsModal */}
      { modalView && <PhotoDetailsModal
                        likesArray={likesArray} handleLikesArray={handleLikesArray} 
                        modalView={modalView} handleModalView={handleModalView}
                        selectedPhoto={selectedPhoto} handleSelectedPhoto={handleSelectedPhoto}
                      /> 
      }

    </div>
  );
};

export default App;
