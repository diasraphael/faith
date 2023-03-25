import React from 'react';
import './Gallery.scss';
import GallerySlide from './GallerySlide';

const Gallery = () => {
  const gnext = function () {
    let lists = document.querySelectorAll('.gallery-item');
    const slide = document.getElementById('gallerySlide');
    if (slide) slide.appendChild(lists[0]);
  };

  const gprev = function () {
    let lists = document.querySelectorAll('.gallery-item');
    const slide = document.getElementById('gallerySlide');
    if (slide) slide.prepend(lists[lists.length - 1]);
  };

  return (
    <section className="section" id="gallery">
      <div className="section__title section__title--testimonials">
        <h2 className="section__description">Our Gatherings</h2>
        <h3 className="section__header">
          Memories are timeless treasures of the heart.
        </h3>
      </div>
      <div className="gallery">
        <div className="gallery-container">
          <div id="gallerySlide">
            <GallerySlide
              url="images/gallery/gall1.jpg"
              header="Church Events"
              description="The social events which gives us more joy and happiness"
            ></GallerySlide>
            <GallerySlide
              url="images/gallery/gall2.jpg"
              header="Church Events"
              description="The social events which gives more joy and happiness"
            ></GallerySlide>
            <GallerySlide
              url="images/gallery/gall3.jpg"
              header="Church Events"
              description="The social events which gives more joy and happiness"
            ></GallerySlide>
            <GallerySlide
              url="images/gallery/gall4.jpg"
              header="Church Events"
              description="The social events which gives more joy and happiness"
            ></GallerySlide>
            <GallerySlide
              url="images/gallery/gall5.jpg"
              header="Church Events"
              description="The social events which gives more joy and happiness"
            ></GallerySlide>
          </div>
          <div className="buttons">
            <button id="gprev" onClick={gprev}>
              <i className="fa-solid fa-angle-left text-[#fff]"></i>
            </button>
            <button id="gnext" onClick={gnext}>
              <i className="fa-solid fa-angle-right text-[#fff]"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
