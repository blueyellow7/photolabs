import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  // custom hook that handles our whole app's state
  const { state, handleLikesArray, handleModalView, handleSelectedPhoto } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photoData}
        topics={state.topicData}
        likesArray={state.likesArray} handleLikesArray={handleLikesArray}
        modalView={state.modalView} handleModalView={handleModalView}
        handleSelectedPhoto={handleSelectedPhoto}
      />

      {/* only if 'ModalView' state = true, render PhotoDetailsModal */}
      { state.modalView && <PhotoDetailsModal
                        likesArray={state.likesArray} handleLikesArray={handleLikesArray} 
                        modalView={state.modalView} handleModalView={handleModalView}
                        selectedPhoto={state.selectedPhoto} handleSelectedPhoto={handleSelectedPhoto}
                      /> 
      }

    </div>
  );
};

export default App;
