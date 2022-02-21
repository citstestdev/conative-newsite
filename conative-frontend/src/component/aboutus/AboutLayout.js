import React  from 'react';
import axios from 'axios';
import About from './About';

function AboutLayout() {

      setTimeout(function() {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);

  return (
    <div className="wrapper">
      <About/>
    </div>
  );
}

export default AboutLayout;
