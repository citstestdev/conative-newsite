import React, { useEffect, useState } from 'react';
import { backendurl } from '../constants';

function DigitalLegacy()
{

  const [data, setData] = useState([])
  const [img, setImg] = useState([])
 

  useEffect(() => {
    fetch(backendurl+"digital-show")
    .then(response => response.json())
    .then(data => setData(data))
  },[])

  var experiencedata ='';
    var experienceArr = data.experience;
    if(experienceArr != undefined){
      experiencedata = experienceArr.split(',');
    // console.log("dd",result);
    }


    useEffect(() => {
      fetch(backendurl+"digital-show")
      .then(res => res.json())
      .then(img => setImg(img.image))
    },[])

   // console.log("FDSFd",img);
    return(
        <div>
          <section className="digital-section-wr">
            <div className="center-wrapper">
              <div className="digital-content-area">
                <div className="features-widget clearfix">
                  <div className="features-head-blk left">
                    <h3 className="wow slideInLeft">
                      <span>{data.name}</span>
                      {data.title}
                    </h3>
                  </div>
                  <div className="features-description-blk right wow " >
                    <p>
                      {data.description}
                    </p>
                  </div>
                </div>
                <div className="experience-list">
                  <ul>
                    <li className="wow fadeIn">{experiencedata[0]}</li>
                    <li className="wow fadeIn">{experiencedata[1]} </li>
                    <li className="wow fadeIn">{experiencedata[2]}</li>
                    <li className="wow fadeIn">{experiencedata[3]}</li>
                  </ul>
                </div>
                <div className="digital-image-blk">
                  <div className="digital-bg-img wow fadeIn">
                    <img src="./assets/images/about_slide_table.png" alt="Conative About Image" />
                  </div>
                  <div className="digital-slider-area">
                    <div className="digital-slider">
                      {img.map((post,index) => (
                      <div className="digital-slider-cls"  key={index}>
                         <img src={post.url} alt="About Slider" />
                      </div>
                    ))}
                  </div>

                  </div>
                </div>
              </div>
            </div>
      </section>
     </div>
  )

}

export default DigitalLegacy;