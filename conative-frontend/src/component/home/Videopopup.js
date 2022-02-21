import React, { Component } from 'react';
import './video.css';

className Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
           <iframe width="560" height="315" src="./assets/video/conative.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button onClick={this.props.closePopup}>close me</button>
        <video className="video-block" controls="true" autoplay="true" muted src="" type="video/mp4"></video>
        </div>
      </div>
    );
  }
}

export default Popup;