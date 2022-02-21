import React  from 'react';
import axios from 'axios';
import Portfolio from './Portfolio';

function PortfolioLayout() {

      setTimeout(function() {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);

  return (
    <div className="wrapper">
      <Portfolio/>
    </div>
  );
}

export default PortfolioLayout;
