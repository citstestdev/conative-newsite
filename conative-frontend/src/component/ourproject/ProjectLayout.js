import React from 'react';
import axios from 'axios';
import Project from './Project';

function ProjectLayout() {

      setTimeout(function() {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);
      
  return (
    <div className="wrapper">
    <section className="banner-wr" >
	<div className="center-wr">
      <Project/>
      </div>
      </section>
    </div>
  );
}

export default ProjectLayout;
