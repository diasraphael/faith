/* import React, { useEffect } from 'react';
import './VideoPlayer.scss';
const setup = () => {
  console.log('Dias');
  const main_video = document.querySelector('.main-video video');
  const main_video_title = document.querySelector('.main-video .title');
  const video_playlist = document.querySelector('.video-playlist .videos');

  let data = [
    {
      id: 'a1',
      title: 'manipulate text background',
      name: 'manipulate text background.mp4',
      duration: '2:47',
    },
    {
      id: 'a2',
      title: 'build gauge with css',
      name: 'build gauge with css.mp4',
      duration: '2:45',
    },
    {
      id: 'a3',
      title: '3D popup card',
      name: '3D popup card.mp4',
      duration: '24:49',
    },

    {
      id: 'a4',
      title: 'customize HTML5 form elements',
      name: 'customize HTML5 form elements.mp4',
      duration: '3:59',
    },
    {
      id: 'a5',
      title: 'custom select box',
      name: 'custom select box.mp4',
      duration: '4:25',
    },
    {
      id: 'a6',
      title: 'embed google map to contact form',
      name: 'embed google map to contact form.mp4',
      duration: '5:33',
    },
    {
      id: 'a7',
      title: 'password strength checker javascript web app',
      name: 'password strength checker javascript web app.mp4',
      duration: '0:29',
    },

    {
      id: 'a8',
      title: 'custom range slider',
      name: 'custom range slider.mp4',
      duration: '1:12',
    },
    {
      id: 'a9',
      title: 'animated shopping cart',
      name: 'animated shopping cart.mp4',
      duration: '3:38',
    },
  ];

  data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    if (video_playlist) video_playlist.innerHTML += video_element;
  });

  let videos = document.querySelectorAll('.video');
  if (videos.length) {
    videos[0].classList.add('active');
    videos[0].querySelector('img')!.src = 'images/pause.svg';
  }

  videos.forEach((selected_video) => {
    if (selected_video instanceof HTMLElement) {
      selected_video.onclick = () => {
        for (let all_videos of videos) {
          all_videos.classList.remove('active');
          all_videos.querySelector('img')!.src = 'images/play.svg';
        }

        selected_video.classList.add('active');
        selected_video.querySelector('img')!.src = 'images/pause.svg';

        let match_video = data.find(
          (video) => video.id === selected_video.dataset!.id
        );
        if (main_video instanceof HTMLImageElement) {
          main_video.src = 'videos/' + match_video!.name;
          main_video_title!.innerHTML = match_video!.title;
        }
      };
    }
  });
};
const VideoPlayer = () => {
  useEffect(() => {
    setup();
  }, []);

  return (
    <section className="section dark">
      <div className="video-container">
        <div className="main-video">
          <video
            src="videos/manipulate text background.mp4"
            controls
            autoPlay
            muted
          ></video>
          <h3 className="title">Title of the playing Video.</h3>
        </div>

        <div className="video-playlist">
          <h3 className="title">Title of Video Playlist</h3>
          <p>10 lessions &nbsp; . &nbsp; 50m 48s</p>
          <div className="videos"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
 */
import React, { useState } from 'react';
import './VideoPlayer.scss';

const VideoPlayer = () => {
  const [data] = useState([
    {
      id: 'a1',
      title: 'FBC-Sunday Service-10.11.2024',
      name: 'https://www.youtube.com/embed/vqa2wbqwJW0',
      duration: '1:31:08',
    },
    {
      id: 'a2',
      title: 'FBC-Sunday Service-03.10.2024',
      name: 'https://www.youtube.com/embed/LmR1IT0UQgA',
      duration: '2:45:06',
    },
    {
      id: 'a3',
      title: 'FBC-Anniversary Celebration-02.11.2024',
      name: 'https://www.youtube.com/embed/5PKuq55GNYY',
      duration: '2:48:28',
    },
    {
      id: 'a4',
      title: 'FBC-Youth Session-02.11.2024',
      name: 'https://www.youtube.com/embed/VXIB3XPO_OU',
      duration: '1:15:32',
    },
    {
      id: 'a5',
      title: 'FBC-Sunday Service-27.10.2024',
      name: 'https://www.youtube.com/embed/dlU-GA_ntWM',
      duration: '1:07:26',
    },
    {
      id: 'a6',
      title: 'FBC-Sunday Service-20.10.2024',
      name: 'https://www.youtube.com/embed/-KkOuyHl_So',
      duration: '1:10:46',
    },
    {
      id: 'a7',
      title: 'FBC-Sunday Service-13.10.2024',
      name: 'https://www.youtube.com/embed/WwvQ5y6YHbA',
      duration: '1:15:18',
    },
  ]);

  const [selectedVideo, setSelectedVideo] = useState(data[0]);

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video);
  };

  return (
    <section className="section video-library" id="messages">
      <div className="section__title section__title--testimonials">
        <h2 className="section__description">Our Church Sermons</h2>
        <h3 className="section__header">
          Your most powerful testimony is how you treat others after the church
          service is over.
        </h3>
      </div>
      <div className="flex items-center">
        <div className="video-container">
          <div className="main-video">
            <iframe
              allowFullScreen
              src={`${selectedVideo.name}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <h3 className="title">{selectedVideo.title}</h3>
          </div>

          <div className="video-playlist">
            <h3 className="title">Title of Video Playlist</h3>
            <p>10 lessons &nbsp;</p>
            <div className="videos">
              {data.map((video, index) => (
                <div
                  key={video.id}
                  className={`video ${
                    selectedVideo.id === video.id ? 'active' : ''
                  }`}
                  onClick={() => handleVideoClick(video)}
                >
                  <img
                    src={`images/${
                      selectedVideo.id === video.id ? 'pause' : 'play'
                    }.svg`}
                    alt=""
                  />
                  <p>{index + 1 > 9 ? index + 1 : '0' + (index + 1)}. </p>
                  <h3 className="title">{video.title}</h3>
                  <p className="time">{video.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
