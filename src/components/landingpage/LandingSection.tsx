import React from 'react';
import Header from '../header/Header';
import Slider from './Slider';
import SocialIcons from './SocialIcons';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => (
  <div className="audio-player">
    <AudioPlayer
      autoPlay
      src="https://radio.chandrabose.no/listen/viduthalaifm/live"
      onPlay={(e) => console.log('onPlay')}
    />
  </div>
);
const LandingSection = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <SocialIcons></SocialIcons>
      <Player></Player>
      <Slider></Slider>
    </div>
  );
};

export default LandingSection;
