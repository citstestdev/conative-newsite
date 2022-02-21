import React, { useEffect, useState } from 'react';
import { backendurl } from '../constants';

function OurProjects()
{

  const [data, setData] = useState([])
  const [item, setItem] = useState([])
 
  useEffect(() => {
    fetch(backendurl+"ourprojects-show")
    .then(response => response.json())
    .then(data => setData(data))
  },[])

  // useEffect(() => {
  //   fetch("http://localhost:4000/ourprojectsitem-show")
  //   .then(res => res.json())
  //   .then(item => setItem(item))
  // },[])

  useEffect(() => {
    fetch(backendurl+"ourprojectsitem-show-limit")
    .then(res => res.json())
    .then(item => setItem(item))
  },[])

  // console.log("sadfsasa",item);

    return(
      <div>
     <section className="our-project-wr">
        <div className="center-wrapper">
          <div className="features-widget clearfix">
              <div className="features-head-blk left wow fadeInLeft">
                <h3>
                  <span>{data.title}</span>
                  {data.name}
                </h3>
              </div>
              <div className="features-description-blk right wow">
                <p>
                  {data.description}
                </p>
              </div>
          </div>
          <div className="project-widget-area">
           {item.map(post => (
            <div className="trigger-hover" key={post._id}>
           
              <div className="dcard">
                <div className="trigger"></div>
                <div className="trigger"></div>
                <div className="trigger"></div>
                <div className="trigger"></div>
                <div className="trigger"></div>
                <div className="trigger"></div>
                <div className="trigger"></div>
                <div className="trigger"></div>
                <div className="trigger"></div>
                <div className="project-block wow fadeInDown">
                  <figure>
                    <div className="card-image">
                      <img src={backendurl+post.image} alt="Project Image"/>
                    </div>
                    <figcaption>
                      <h3><a href="#"> {post.name}</a></h3>
                      <p>{post.description}</p>
                    </figcaption>
                  </figure>
                </div> 
              </div>


            </div>
      ))}
          </div>
        </div>
      </section>
     </div>
      )

}

export default OurProjects;