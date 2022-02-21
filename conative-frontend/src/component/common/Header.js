import React,{ useEffect, useState } from 'react';
import { BrowserRouter as Router,Route, Switch, NavLink , Link, Redirect} from "react-router-dom";


function Header()
{

  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:4000/show-social")
    .then(response => response.json())
    .then(data => setData(data))
  },[])
 

    return(
          <header>
            <div className="center-wrapper">
              <div className="header-area clearfix">
                <div className="logo-block left">
                  <Link to="/home">
                    <img src={'http://localhost:4000/'+data.image} alt="Conative It Solutions Logo"/>
                  </Link>
                </div>
                <div className="header-contact-content right">
                  <div className="contact-blk">
                    <a href="mailto:info@conativeitsolution.com"><img src="../assets/images/header_mail_icon.svg" alt="header mail icon" /><span data-content="info@conativeitsolution.com">{data.alternateemail}</span></a>
                    <a href="tel:91 82697 88173"><img src="../assets/images/header_whatsapp_icon.svg" alt="header mail icon" /><span data-content="+91 82697 88173">+91 {data.alternatephone}</span></a>
                  </div>
                  <div className="our-work-blk">
                    <a href="#" className="btn btn1"><span>our work</span> <i className="fas fa-arrow-up"></i></a>
                  </div>
                  <div className="menu-blk">
                    <div className="tilted-menu-box"></div>
                    <div className="menu-bar-box">
                      <div className="menu-bar"></div>
                      <div className="menu-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
      )

}

export default Header;