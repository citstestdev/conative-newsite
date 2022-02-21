import React,{ useEffect, useState } from "react";
import { backendurl } from '../constants';

function ProjectSingle(props) {

  const [data, setData] = useState([]);
  const api_url = backendurl+"project/"+props.match.params.id;

  useEffect(() => {
        setTimeout(function() {
         window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  },[])

  async function getapi(url) {
  
      const response = await fetch(url);
      if (response) {
        var data = await response.json();
        setData(data);
      }
  }

getapi(api_url);

const rawHTML = `<section className="banner-wr" >
  <div class="center-wr">
   <div class="other-page-title"><h2 class="banner-page-title"><b>${data.name}</b></h2></div>
  <br></br>
     <img src=${backendurl+data.image} alt="" style="width:100%; height:500px;"/>
  <div class="aboutus-first-right-wr">
  <br></br>
     <p>${data.description}</p>
  </div>
  </div>
</section>`;

    return(
        <div>
            { <div dangerouslySetInnerHTML={{ __html: rawHTML }} /> }
        </div>
      )
};

export default ProjectSingle;
