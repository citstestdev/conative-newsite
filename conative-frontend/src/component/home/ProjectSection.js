import React, { useEffect, useState }  from 'react';
import { backendurl } from '../constants';

function ProjectSection()
{

   const [data, setData] = useState([])
   const [img, setImg] = useState([])
   
    useEffect(() => {
      fetch(backendurl+"startpjt-show")
      .then(response => response.json())
      .then(data => setData(data))
    },[])

    useEffect(() => {
      fetch(backendurl+"startpjt-show")
      .then(res => res.json())
      .then(img => setImg(img.image))
    },[])

// setImg(data.image);

// console.log("dada",img);

    return(
        <div>
         <section className="get-started-wr">
        <div className="get-started-head">
          <div className="center-wrapper">
            <h6 className="wow fadeIn">{data.name}</h6>
            <div className="get-started-description wow fadeInDown data-wow-duration='0.7s'"> 
              <p>{data.title}</p>
            </div>
            <div className="get-started-btn wow fadeInDown data-wow-duration='0.5s'">
              <a href="http://localhost:3000/login"> <span data-content="Let' Get Started">{data.btnname}</span></a>
              <a href="http://localhost:3000/login"><img src="./assets/images/cta_lets_get_started.svg" alt="Conative Icon" /></a>
            </div>
          </div>
        </div>
        <div className="creator-content-area clearfix">
          <div className="get-started-slider-area left">
            <div className="get-started-slider">
              {img.map((post,index) => (
                        <div className="get-started-slider-cls" key={index}>
                        <img src={post.url} alt="Conative creator"/>
                        </div>
                  ))}
            </div>
          </div>
          <div className="get-started-content right">
              <div className="get-started-blk"> 
                <h3 className="wow fadeInDown data-wow-duration='1.5's">
                  <span dangerouslySetInnerHTML={{ __html: data.description }}></span>
                </h3>
                <h4 className="wow fadeInDown data-wow-duration='1.5's">
                  More than an<br></br> <strong>Agency,</strong> <br></br>we are <strong>creator</strong>
                </h4>
                <a href="http://localhost:3000/login" className="btn btn2 wow fadeInDown data-wow-duration='1.5's"><span>our work</span> <i className="fas fa-arrow-up"></i></a>
              </div>
          </div>
        </div>
      </section>
     </div>
      )

}

export default ProjectSection;