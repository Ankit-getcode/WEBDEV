// src/components/Gallery.js
import React,{useState} from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Batata from '../image/batata.jpg'
import swarn  from '../image/swarn.jpeg'
import Swarn1 from '../image/swarn1.jpg'
import './Connect.css';

const images = [
  {
    original: Batata,
    thumbnail: Batata,
  },
  {
    original: swarn,
    thumbnail: swarn,
  },
  {
    original: Swarn1,
    thumbnail: Swarn1,
  },
];

const Gallery = (props) => {

  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleScreenChange = (isFullScreen) => {
    setIsFullscreen(isFullScreen);
  };
  return (
    <div className="gallerycontainer">
      
    <div className="gallerybox custom-height">
    <button className="galleryclose" onClick={props.togglegallery}>&times;</button>
    <ImageGallery 
      items={images}
      showThumbnails={true}
      showFullscreenButton={true}
      showPlayButton={true}
      autoPlay={true}
      onScreenChange={handleScreenChange}
    />
    </div>
    </div>
  );
};

export default Gallery;
