import React, { useState } from 'react';
import './VideoSection.scss';

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="video-section">
      <div className="video-container-sermon">
        <div className="content-box">
          <h2>Welcome to Faith Baptist Church</h2>
          <p>Our Latest Sermon: Spiritual Sickness: Despising God’s Call</p>
          <p>Scripture References: Genesis 25:24-34 Matthew 22:1-14 </p>
          <p>
            Despising God's Call: Despising means considering something as
            negligible or worthless. If we view our salvation and God’s call as
            unimportant, the consequences can be regrettable. Biblical Examples:
            Esau's Birthright: When Esau was hungry, he sold his blessed
            birthright for food. As a consequence, he is mentioned as a
            fornicator (a negative example of faith) and could not receive the
            blessing he despised (Hebrews 12:16-17). Parable of the Wedding
            Feast: Jesus told a parable about a king inviting people to his
            son’s wedding feast. All the invited guests despised the call,
            leading the king to become furious and destroy them. Jesus
            concluded, "Many are called, but few are chosen." Accepting God's
            Call: People who accept His call to become His children (John 1:12)
            and prioritize God in everything are chosen to inherit God’s
            kingdom. God keeps His covenant and mercy with them (Nehemiah 1:5).
          </p>
          <p>To learn more about, check out the video below</p>
          <p>Visit us - Faith Baptist Church, Sunday 11AM</p>
          <p>Our Location - Stålfjæra 20, 0975 Oslo, Norway</p>
          <button
            className="watch-video-btn"
            onClick={() => setShowVideo(true)}
          >
            Watch Our Latest Service
          </button>
        </div>
      </div>

      {showVideo && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="close-btn" onClick={() => setShowVideo(false)}>
              ×
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1z4nLTRDhmQ?si=pA5tjhvXn1xsauej"
              title="Faith Baptist Church Service"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
