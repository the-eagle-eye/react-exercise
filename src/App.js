import React, { useState, useEffect } from "react";
import PhotosList from "./components/PhotosList";
import DeletedList from "./components/DeletedList";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const size = 20;

  const removePhotos = photoSelected => {
    const removePhotos = photos.map(photo => {
      if (photoSelected.id === photo.id) {
        return photoSelected;
      }
      return photo;
    });
    setPhotos(removePhotos);
  };

  const notRemovedPhotos = photos.filter(photo => !photo.completed);
  const removedTasks = photos.filter(photo => photo.completed);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        setPhotos(response.data.slice(0, size));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <PhotosList
        photos={notRemovedPhotos}
        removePhotos={removePhotos}
        heading="Photos"
      />
      <DeletedList photos={removedTasks} heading="Removed Photos" />
    </div>
  );
}

export default App;
