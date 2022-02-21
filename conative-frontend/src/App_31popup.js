import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomeLayout from './component/home/HomeLayout';
import Footer from './component/common/Footer';
import Popup from './component/home/Videopopup';



class App extends Component {
  // state = {
  //   data: null
  // };

    constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  // componentDidMount() {
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }

  //   // fetching the GET route from the Express server which matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  //   const body = await response.json();
  //  // console.log("gggg",body);
  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  render() {
    return (
      <div className="App">
           <HomeLayout />
           <Footer />
            <button onClick={this.togglePopup.bind(this)}>show popup</button>

            {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default App;