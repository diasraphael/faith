import React from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-container">
        <div className="map">
          <iframe
            title="Faith Baptist Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.9812546522026!2d10.872366172557689!3d59.949045210086226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46417002655a6e9d%3A0x191ded390e8eafe0!2sFaith%20Baptist%20Church!5e0!3m2!1sen!2sno!4v1677912516512!5m2!1sen!2sno"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
