import React  from 'react';
import axios from 'axios';
import Join from './Join';

function JoinusLayout() {

      setTimeout(function() {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);

  return (
    <div className="wrapper">
      <Join/>
    </div>
  );
}

export default JoinusLayout;
