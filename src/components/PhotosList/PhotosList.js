import React from "react";
import PhotosItem from "../PhotosItem";
import styles from "./styles.module.css";

function PhotosList({ photos, removePhotos, heading }) {
  return (
    <div>
      <h1>{heading}</h1>
      <ul className={styles.photosList}>
        {photos.map((photo, index) => (
          <PhotosItem
            className={styles.photoItem}
            key={index}
            photo={photo}
            removePhotos={removePhotos}
          />
        ))}
      </ul>
    </div>
  );
}

export default PhotosList;
