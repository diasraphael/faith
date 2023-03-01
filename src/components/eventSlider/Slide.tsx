import React from 'react';

export interface SlideProps {
  header: string;
  content: string;
  image: string;
  name: string;
  location: string;
}

const Slide = (props: SlideProps) => {
  const { header, content, image, name, location } = props;
  return (
    <div className="slide">
      <div className="testimonial">
        <h5 className="testimonial__header">{header}</h5>
        <blockquote className="testimonial__text">{content}</blockquote>
        <address className="testimonial__author">
          <img src={image} alt="" className="testimonial__photo" />
          <h6 className="testimonial__name">{name}</h6>
          <p className="testimonial__location">{location}</p>
        </address>
      </div>
    </div>
  );
};

export default Slide;
