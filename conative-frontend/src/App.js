import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import backurl from 'http://localhost:4000/';

// import './assets/css/style.css';
// import { Routes, Route, Link, Redirect} from "react-router-dom";
import { BrowserRouter as Router,Route, Switch, NavLink , Link, Redirect} from "react-router-dom";
// import { Route, Redirect } from 'react-router'

import HomeLayout from './component/home/HomeLayout';
import Footer from './component/common/Footer';
import SinglePage from './component/home/SinglePage';
import ContactLayout from './component/contact/ContactLayout';
import AboutLayout from './component/aboutus/AboutLayout';
import ProjectLayout from './component/ourproject/ProjectLayout';
import ProjectSingle from './component/ourproject/ProjectSingle';
import JoinusLayout from './component/joinus/JoinusLayout';
import PortfolioLayout from './component/portfolio/PortfolioLayout';
import PortfolioSingle from './component/portfolio/PortfolioSingle';
// import Blog  from "./component/blog/Blog";
// import Posts from "./component/blog/Posts";
// import Post  from "./component/blog/Post";
// import {
//   Blog,
//   Posts,
//   Post
// } from "./component";
// import Con from './component/test/counter';
// import Popup from './component/home/Videopopup';
// import Testpopup from './component/home/Testpopup';
// import ClientDetailsSection from './component/home/ClientDetailsSection';


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


  render() {

    return (
      <div className="App">
        <div className="scroll-verticle-blk">
            <a href={void(0)} className="">scroll</a>
        </div>
           <nav>
        <ul style={{'display':'none'}}>
         <li>
            <NavLink to="/home" >HomeLayout</NavLink>
          </li>
          <li>
            <NavLink to="/login" >HomeLayout</NavLink>
          </li>
          <li>
            <NavLink to="/SinglePage/:id" >SinglePage</NavLink>
          </li>
          <li>
            <NavLink to="/contact" >Contact</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" >About Us</NavLink>
          </li>
          <li>
           <NavLink to="/projects">Project</NavLink>
          </li>
          <li>
           <NavLink to="/project/:id">ProjectSingle</NavLink>
          </li>
          <li>
           <NavLink to="/join">Join</NavLink>
          </li>
          <li>
          <NavLink to="/portfolios">Portfolio</NavLink>
          </li>
          <li>
          <NavLink to="/portfolio/:id">Portfolioitem</NavLink>
          </li>
        </ul>
      </nav>
        <Switch>
         <Route path="/home" component={HomeLayout} /> 
         <Route
            exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/home"/> 
                    )
                }}
            />
            <Route
            exact
                path="/login"
                render={() => {
                    return (
                      <Redirect to="/home"/> 
                    )
                }}
            />
          
          <Route path="/SinglePage/:id" component={SinglePage} />
          <Route path="/contact" component={ContactLayout} />
          <Route path="/aboutus" component={AboutLayout} />
          <Route path="/projects" component={ProjectLayout} />
          <Route path="/project/:id" component={ProjectSingle} />
          <Route path="/join" component={JoinusLayout} />
          <Route path="/portfolios" component={PortfolioLayout} />
          <Route path="/portfolio/:id" component={PortfolioSingle} />
        </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;