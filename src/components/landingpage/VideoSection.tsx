import React, { useState } from 'react';
import './VideoSection.scss';

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="section">
      <div className="video-container-sermon">
        <div className="content-box">
          <h2>Welcome to Faith Baptist Church</h2>
          <p>Our Latest Sermon: Self-Sympathy - A Spiritual Challenge</p>
          <p>Scripture References: 1 Kings 19:1-18, Proverb 28:13 </p>
          <p>
            Self-sympathy is a spiritual ailment that can divert us from God's
            blessings and His plans for our lives. It can mislead us from the
            path to achieving our goals. The story of Elijah in 1 Kings 19:1-18
            serves as a powerful example. Despite being a mighty servant of God,
            Elijah succumbed to self-pity. Yet, in his moments of weakness and
            despair, God provided him with strength, enabling him to journey for
            40 days. This demonstrates that when God sustains us, we receive
            supernatural strength. This message encourages believers to rely on
            God's grace to overcome self-pity and to live a life that honors
            Him, regardless of the struggles, battles, or difficult days we may
            face.
          </p>
          <p>To learn more about Self-sympathy check out the video below</p>
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
              src="https://www.youtube.com/embed/UK1uOufmomg?si=QWlxQDayop5COdlE"
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
