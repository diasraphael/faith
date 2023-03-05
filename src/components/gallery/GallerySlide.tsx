import React from 'react';
import './Gallery.scss';
interface GallerySlideProps {
  url: string;
  header: string;
  description: string;
}

const GallerySlide = (props: GallerySlideProps) => {
  const { url, header, description } = props;
  return (
    <div className="gallery-item" style={{ backgroundImage: `url(${url})` }}>
      <div className="content">
        <div className="name">{header}</div>
        <div className="des">{description}</div>
        <button>See more</button>
      </div>
    </div>
  );
};

export default GallerySlide;
