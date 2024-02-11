import { useReducer } from 'react';
import photos from "../mocks/photos";

const useApplicationData = () => {
  
  const initialState = {
    likesArray: [],
    modalView: false,
    selectedPhoto: null
  }

  function reducer(state, action) {
    switch (action.type) {
      case "updateLikesArray":
        return { ...state, likesArray: action.updatedState };

      case "toggleModalView":
        return { ...state, modalView: action.updatedState };

      case "loadSelectedPhoto":
        return { ...state, selectedPhoto: action.updatedState };
        
      default: throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);


  /* 1) function triggered by PhotoFavButton's onClick event:
    if likesArray already has photo id related to clicked <3 button, remove id from array -> else, return likesArray with new id */
  const handleLikesArray = (photoId) => {
    const likesArray = state.likesArray;
    const updateLikesArray = likesArray.includes(photoId) ? likesArray.filter(id => id !== photoId) : [...likesArray, photoId];
    dispatch({ type: "updateLikesArray", updatedState: updateLikesArray });
  }

  /* 2) function triggered by onClick event on PhotoListItem img + onClick event on modal close button:
    change to opposite (truthy<->falsey) from prev state (initial=false) to toggle opening/closing of modal */
  const handleModalView = () => {
    const toggleModalView = !state.modalView
    dispatch({ type: "toggleModalView", updatedState: toggleModalView });
  }

  /* 3) function triggered by onClick event in PhotoListItem:
    finds and returns photo data of clicked on img using photo id as arguement. data used to load modal */
  const handleSelectedPhoto = (selectedId) => {
    const loadSelectedPhoto = photos.find((photo) => photo.id === selectedId);
    dispatch({ type: "loadSelectedPhoto", updatedState: loadSelectedPhoto });
  }

  return {
    state,
    handleLikesArray,
    handleModalView,
    handleSelectedPhoto
  };
};

export default useApplicationData;