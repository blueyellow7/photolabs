import { useReducer, useEffect } from 'react';

const useApplicationData = () => {

  const initialState = {
    photoData: [],
    topicData: [],
    likesArray: [],
    modalView: false,
    selectedPhoto: null
  };

  const ACTIONS = {
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    UPDATE_LIKES_ARRAY: 'UPDATE_LIKES_ARRAY',
    TOGGLE_MODAL_VIEW: 'TOGGLE_MODAL_VIEW',
    LOAD_SELECTED_PHOTO: 'LOAD_SELECTED_PHOTO'
  };

  /* api request to get photos data. store data in 'payload' */
  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  /* api request to get topics data. store data in 'payload' */
  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => { 
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  /* function called by onClick event in TopicListItem:
    fetches topic related photos from api using topic id as argument */
  const handleSelectedTopic = (selectedId) => {
    fetch(`api/topics/photos/${selectedId}`)
      .then((response) => response.json())
      .then((data) => { 
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos by topic:', error);
      });
  };

  /* function called by onClick event in PhotoFavButton:
    if likesArray already has photo id related to clicked <3 button, remove id from array -> else, return likesArray with new id */
  const handleLikesArray = (photoId) => {
    const likesArray = state.likesArray;
    const updateLikesArray = likesArray.includes(photoId) ? likesArray.filter(id => id !== photoId) : [...likesArray, photoId];
    dispatch({ type: ACTIONS.UPDATE_LIKES_ARRAY, updatedState: updateLikesArray });
  };

  /* function called by onClick event in PhotoListItem img + onClick event on modal close button:
    change to opposite (truthy<->falsey) from prev state to toggle opening/closing of modal */
  const handleModalView = () => {
    const toggleModalView = !state.modalView;
    dispatch({ type: ACTIONS.TOGGLE_MODAL_VIEW, updatedState: toggleModalView });
  };

  /* function called by onClick event in PhotoListItem:
    returns photo data of clicked img using photo id as arguement. data used to load modal */
  const handleSelectedPhoto = (selectedId) => {
    const loadSelectedPhoto = state.photoData.find((photo) => photo.id === selectedId);
    dispatch({ type: ACTIONS.LOAD_SELECTED_PHOTO, updatedState: loadSelectedPhoto });
  };


  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };

      case ACTIONS.UPDATE_LIKES_ARRAY:
        return { ...state, likesArray: action.updatedState };

      case ACTIONS.TOGGLE_MODAL_VIEW:
        return { ...state, modalView: action.updatedState };

      case ACTIONS.LOAD_SELECTED_PHOTO:
        return { ...state, selectedPhoto: action.updatedState };

      default:
        throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    handleLikesArray,
    handleModalView,
    handleSelectedPhoto,
    handleSelectedTopic,
  };

};

export default useApplicationData;