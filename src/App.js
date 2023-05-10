import React, { useState } from "react";
import "./styles.css";
import imageData from "./imageData";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(imageData[0]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const thumbnailImages = imageData.map((image, index) => (
    <img
      key={index}
      className="thumb"
      src={image.img}
      alt={image.city}
      onClick={() => handleClick(image)}
    />
  ));

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{thumbnailImages}</div>
        <img id="bigimage" src={selectedImage.img} alt={selectedImage.city} />
      </div>
    </div>
  );
}
