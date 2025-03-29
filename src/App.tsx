import React from "react";
import "./App.scss";
import EventSlider from "./components/eventSlider/EventSlider";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import LandingSection from "./components/landingpage/LandingSection";
import LocationMap from "./components/locationMap/LocationMap";
import PromiseWall from "./components/promise/Promise";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import Vision from "./components/vision/Vision";
import { About } from "./components/about/About";
import VideoSection from "./components/landingpage/VideoSection";

function App() {
  return (
    <div className="App">
      <LandingSection></LandingSection>
      <VideoSection></VideoSection>
      <Vision></Vision>
      <EventSlider></EventSlider>
      <PromiseWall></PromiseWall>
      <Gallery></Gallery>
      <VideoPlayer></VideoPlayer>
      <About></About>
      <LocationMap></LocationMap>
      <Footer></Footer>
    </div>
  );
}

export default App;
