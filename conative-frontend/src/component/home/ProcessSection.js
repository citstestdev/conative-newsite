import React, { useEffect, useState }  from 'react';
import { backendurl } from '../constants';

function ProcessSection()
{


  const [data, setData] = useState([])
  const [item, setItem] = useState([])
 
  useEffect(() => {
    fetch(backendurl+"process-show")
    .then(response => response.json())
    .then(data => setData(data))
  },[])

  useEffect(() => {
    fetch(backendurl+"processplan-show")
    .then(res => res.json())
    .then(item => setItem(item))
  },[])

 // console.log("FDA",item);

    return(
        <div>
        <section className="our-process-wr">
        <div className="center-wrapper">
          <div className="features-widget clearfix">
              <div className="features-head-blk left wow slideInLeft">
                <h3>
                  <span>{data.title}</span>
                  {data.name}
                </h3>
              </div>
              <div className="features-description-blk right wow" data-splitting>
                <p>
                 {data.description}
                </p>
              </div>
          </div>
            <div className="process-pager-blk">
              <ul className="process-pager">
              {item.map((post,index)  => (

                <li key={post._id}><a href="{void(0)}" data-slide-index={index}>{post.name}<span className="dot"></span></a></li>
                ))}
              </ul>
            </div>
        </div>
          <div className="process-slider-area">
            <div className="process-slider">
              {item.map((post,index) => (
              <div className="process-slide" key={post._id}>
                <figure>
                  <img src={backendurl+post.image} alt="Conative Process" />
                </figure>
              </div>
              ))}
            </div>
          </div>
  </section>
     </div>
      )
}

export default ProcessSection;