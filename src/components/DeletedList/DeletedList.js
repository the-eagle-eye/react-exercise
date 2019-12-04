import React from "react";

function DeletedList({ photos, heading }) {
  return (
    <div>
      <h1>{heading}</h1>
      <ol>
        {photos.map((photo, index) => (
          <li key={index}>{photo.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default DeletedList;
