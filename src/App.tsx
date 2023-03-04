import React from 'react';
import './App.scss';
import ContactUs from './components/contactUs/ContactUs';
import EventSlider from './components/eventSlider/EventSlider';
import Footer from './components/footer/Footer';
import LandingSection from './components/landingpage/LandingSection';

function App() {
  return (
    <div className="App">
      <LandingSection></LandingSection>
      <EventSlider></EventSlider>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
