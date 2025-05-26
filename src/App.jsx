import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSVG from './components/AnimatedSVG';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <AnimatedSVG />
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
