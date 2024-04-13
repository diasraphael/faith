import React from 'react';
import './App.scss';
import EventSlider from './components/eventSlider/EventSlider';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import LandingSection from './components/landingpage/LandingSection';
import LocationMap from './components/locationMap/LocationMap';
import PromiseWall from './components/promise/Promise';
import VideoPlayer from './components/videoPlayer/VideoPlayer';
import Vision from './components/vision/Vision';
import { About } from './components/about/About';

function App() {
  return (
    <div className="App">
      <LandingSection></LandingSection>
      <Vision></Vision>
      <EventSlider></EventSlider>
      <PromiseWall></PromiseWall>
      <Gallery></Gallery>
      {/*  <About></About> */}
      <VideoPlayer></VideoPlayer>
      <LocationMap></LocationMap>
      <Footer></Footer>
    </div>
  );
}

export default App;
