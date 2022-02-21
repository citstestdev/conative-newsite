import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Contact from './Contact';


function ContactLayout() {
   
    setTimeout(function() {
         window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  
  return (
    <div className="wrapper">
      <Contact/>
    </div>
  );
}

export default ContactLayout;
