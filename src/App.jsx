import React from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section1 from './components/Section1/Section1';
import Section3 from './components/Section3/Section3';
import Copyright from './components/Copyright/Copyright';
import Contact from './components/Contact/Contact';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section1 />
      <Section3 />
      <Contact />
      <Copyright />
    </div>
  )
}

export default App