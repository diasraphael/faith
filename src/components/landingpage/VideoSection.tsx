import React, { useState } from "react";
import "./VideoSection.scss";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="video-section">
      <div className="video-container-sermon">
        <div className="content-box">
          <h2>Welcome to Faith Baptist Church</h2>
          <p>Our Latest Sermon: Spiritual sickness : Laziness</p>
          <p>Scripture References: Mark 16: 1 - 7, Matthew 25: 24 - 30 </p>
          <p>
            Laziness is a very critical spiritual sickness which can bring
            poverty over us and bring down all our blessings (Proverbs 24:30 -
            34) When Jesus was resurrected, He did not want to waste any moment
            and the angel informed the women that He has already gone before
            them to Galilee. In the parable told by Jesus, He condemned the man
            who didn’t use the talent given to him as wicked, lazy and
            unprofitable. His talent is taken from him to give to the faithful
            servant and he is thrown into the outer darkness. We are called to
            be cautious of God given talents and blessings and be focused to use
            and improve them for His glory.
          </p>
          <p>
            Our previous week Sermon: Resurrection day : Call to seek heavenly
            blessings
          </p>
          <p>Scripture References: Numbers 32: 1 - 15,Colossians 3: 1, 2 </p>
          <p>
            Resurrection of Jesus is marked to be the victory over Satan. But it
            is not the end, but the beginning to the eternity. After Jesus’
            resurrection, He ascended to heaven, ⁃ to prepare a mansion for us
            (John 14:2) ⁃ to sit in the right of God the Father and to help us
            being our advocate (I John 2:1) ⁃ to send Holy Spirit for us (John
            16:7) Looking back about, when the Israelites were almost reaching
            Canaan, two tribes (Reuben and Gad) wanted to settle before the
            Jordan since they thought the pastures would be better for their
            multitude of livestock. We are called to focus on such eternal
            heavenly blessings promised by Jesus and not let earthly blessings
            stop us anywhere (like Reuban and Gad).
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
              src="https://www.youtube.com/embed/vb_9-cvg6b0?si=y_1fe9lsUOhAE3OP"
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
