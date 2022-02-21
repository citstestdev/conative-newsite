import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {NavLink , Link } from "react-router-dom";
import { backendurl } from '../constants';

function Portfolio(props)
{

  const [data, setData] = useState([])
 
  useEffect(() => {
    fetch(backendurl+"api/portfolio")
    .then(response => response.json())
    .then(data => setData(data))
  },[])


// const rawHTML = `<section className="banner-wr" >
// 	<div class="center-wr">
//    <div class="other-page-title"><h2 class="banner-page-title"><b>Portfolio</b></h2></div>
//   <br></br>
//   {data.map(img => (
//     <img src={'http://localhost:4000/'+img.image} alt={img.title}/>
//   ))}
//   </div>
// </section>`;
// <Link to={'/singlepage/'+post._id}>
    return(
        <div>
           <section>
            <div className="center-wr">
             <div className="other-page-title"><h2 className="banner-page-title"><b>Portfolio</b></h2></div>
            <br></br>
              <div className="backwordurl">
                {data.map(p_val => (
                  <><span style={{'color':'#6e6e6e'}}><Link to={'/portfolio/'+p_val._id}>{p_val.title+' '} </Link></span><span className="portfoliobreak">|</span></>
                ))}
              </div>
              <div className="imgcontent">
                {data.map(p_val => (
                  <div className="img-content-wrpp" style={{'position': 'relative'}}>
                  <img src={backendurl+p_val.image} alt={p_val.title}/>
                   <h1 className="common-design">{p_val.title}</h1>
                   </div>
                ))}

              </div>
            </div>
          </section>
        </div>
      )
}

export default Portfolio;