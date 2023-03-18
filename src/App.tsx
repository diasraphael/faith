import React from 'react';
import './App.scss';
import EventSlider from './components/eventSlider/EventSlider';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import LandingSection from './components/landingpage/LandingSection';
import LocationMap from './components/locationMap/LocationMap';
import VideoPlayer from './components/videoPlayer/VideoPlayer';

function App() {
  return (
    <div className="App">
      <LandingSection></LandingSection>
      <EventSlider></EventSlider>
      <Gallery></Gallery>
      <VideoPlayer></VideoPlayer>
      <LocationMap></LocationMap>
      <Footer></Footer>
    </div>
  );
}

export default App;
