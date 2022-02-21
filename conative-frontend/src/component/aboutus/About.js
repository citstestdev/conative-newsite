import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendurl } from '../constants';

function About(props)
{

  const [data, setData] = useState([])
 
  useEffect(() => {
    fetch(backendurl+"api/about-us")
    .then(response => response.json())
    .then(data => setData(data))
  },[])

    
const rawHTML = `<section className="banner-wr" >
	<div class="center-wr">
   <div class="other-page-title"><h2 class="banner-page-title"><b>${data.title}</b></h2></div>
  <br></br>
     <img src=${backendurl+data.image} alt="" style="width:100%;"/>
	<div class="aboutus-first-right-wr">
  <br></br>
     <p>${data.description}</p>
	</div>
  </div>
</section>`;

    return(
        <div>
            { <div dangerouslySetInnerHTML={{ __html: rawHTML.replace( "us", "<span style='color:#f96400;''>us</span>") }} /> }
        </div>
      )
}

export default About;