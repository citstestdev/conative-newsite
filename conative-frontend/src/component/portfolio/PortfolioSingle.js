import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {NavLink , Link } from "react-router-dom";
import { backendurl } from '../constants';

function PortfolioSingle(props)
{

  const [data, setData] = useState([]);
  const api_url = backendurl+"portfolio/"+props.match.params.id;
   // console.log("api_url",api_url);
  useEffect(() => {
        setTimeout(function() {
         window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);

     async function getapi(url) {
  
      const response = await fetch(url);
      // var data = await response.json();
      // console.log(data);
      if (response) {
        var data = await response.json();
        setData(data);
      }
  }

 getapi(api_url);

  },[])

 console.log("Fdsf",data);


//

    return(
        <div>
           <section>
            <div className="center-wr">
             <div className="other-page-title"><h2 className="banner-page-title"><b>Portfolio</b></h2></div>
            <br></br>
              <div className="backwordurl">
                <h1>Name</h1>

              </div>
            </div>
          </section>
        </div>
      )
}

export default PortfolioSingle;