import { useState } from 'react';
import photos from "../mocks/photos";

const useApplicationData = () => {

  const [likesArray, setLikesArray] = useState([]);
  const [modalView, setModalView] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // function triggered by PhotoFavButton's onClick event:
  // if likesArray already has photo id related to clicked <3 button, remove id from array -> else, return likesArray with new id
  const handleLikesArray = (photoId) => {
    setLikesArray((prev) => {
      return prev.includes(photoId) ? prev.filter(id => id !== photoId) : [...prev, photoId];
    })
  }
  
  // function triggered by onClick event on PhotoListItem img + onClick event on modal close button:
  // change to opposite (truthy<->falsey) from prev state (initial=false) to toggle opening/closing of modal
  const handleModalView = () => { 
    setModalView(prev => !prev)

  }

  // function triggered by onClick event in PhotoListItem:
  // finds and returns photo data of clicked on img using photo id as arguement
  const handleSelectedPhoto = (selectedId) => {
    setSelectedPhoto((prev) => {
      return photos.find((photo) => photo.id === selectedId);
    })
  }

  return { 
    state: {
      likesArray,
      modalView,
      selectedPhoto
    },
    handleLikesArray,
    handleModalView,
    handleSelectedPhoto
  };
}

export default useApplicationData;