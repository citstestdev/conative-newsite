import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route, Switch, NavLink , Link, Redirect} from "react-router-dom";
//const Baceurl = "http://localhost:4000/";
import { backendurl } from '../constants';
// import SinglePage from './SinglePage';

function Expertise()
{

  const [data, setData] = useState([])
  const [item, setItem] = useState([])
 
  useEffect(() => {
    fetch(backendurl+"expertise-show")
    .then(response => response.json())
    .then(data => setData(data))
  },[])

  useEffect(() => {
    fetch(backendurl+"expertiseitem-show")
    .then(res => res.json())
    .then(item => setItem(item))
  },[])


    return(
        <div>
        <section className="our-expertise-wr" id="expertise-re">
        <div className="center-wrapper">
          <div className="features-widget clearfix">
              <div className="features-head-blk wow fadeInLeft left data-wow-duration='1's">
                <h3>
                  <span>{data.title}</span>
                  {data.name}
                </h3>
              </div>
              <div className="features-description-blk wow right data-splitting data-wow-duration='1's">
                <p>
                {data.description}
                </p>
              </div>
          </div>
          <div className="best-features-area clearfix">
          {item.map(post => (
            <div className="best-features-block left" key={post._id}>
              <div className="best-feature-icon wow flipInY">
                <img src={backendurl+post.image} alt="Graphic Design" />
              </div>
              <div className="best-feature-description">
                <h4 className="wow fadeInDown">{post.name}</h4>
                <div className="features-content wow" data-splitting>
                  <p>
                    {post.description}
                  </p>
                </div>
                <div className="read-more-btn wow fadeInDown">
                   <Link to={'/singlepage/'+post._id}>
                    Read More 
                    <img src="./assets/images/service_read_more.svg" alt="Orange arrow" />
                  </Link>
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

export default Expertise;