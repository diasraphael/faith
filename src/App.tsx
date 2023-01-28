import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import LandingSection from './components/landingpage/LandingSection';

function App() {
  return (
    <div className="App">
      <LandingSection></LandingSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
