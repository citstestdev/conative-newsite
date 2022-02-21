import React, { useEffect, useState } from 'react';
import { backendurl } from '../constants';
// import axios from 'axios';

function Home(props)
{

  const [data, setData] = useState([])
 
   // function firstLetter(str){
   //   return str.charAt(0).toUpperCase() + str.slice(1);
   //  }

  useEffect(() => {
    fetch(backendurl+"home-show")
    .then(response => response.json())
    .then(data => setData(data))
  },[])

  var result ='';
    var motivation = data.title;
    if(motivation != undefined){
      result = motivation.split(',');
    }

    return(
        <div>
          <section className="banner-wr">
            <div className="center-wrapper">
              <div className="banner-content-area clearfix">
                <div className="banner-content-blk left">
                  <h1>
                    <span className="large-head wow fadeInDown">{result[0]}</span>
                    <span className="sub-head wow fadeInDown">{data.name}</span>
                  </h1>
                  <ul className="dynamic-txts">
                    <li><span>{result[1]}</span></li>
                    <li><span>{result[2]}</span></li>
                    <li><span>{result[3]}</span></li>
                  </ul>
                  <div className="get-to-know-btn round-bg-btn">
                    <a href="#">
                      <span data-hover="GET TO KNOW US">GET TO KNOW US</span>
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
                <div className="banner-image-blk right">
                  <img src={backendurl+data.image} alt="Conative Banner Image" />
                </div>
              </div>
            </div>
        </section>
     </div>
      )

}

export default Home;