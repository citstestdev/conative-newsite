import React, { useEffect, useState } from 'react';
import { backendurl } from '../constants';
// import CustomPopup from "./CustomPopup";

function ClientDetailsSection()
{ 

  const [data, setData] = useState([])
  const [item, setItem] = useState([])
  const [img, setImg] = useState([])
  const [slider, setSlider] = useState([])
 
  useEffect(() => {
    fetch(backendurl+"cp-show")
    .then(response => response.json())
    .then(data => setData(data))
  },[])

  useEffect(() => {
    fetch(backendurl+"cpi-show")
    .then(res => res.json())
    .then(item => setItem(item))
  },[])


  useEffect(() => {
      fetch(backendurl+"startpjt-show")
      .then(res => res.json())
      .then(img => setImg(img.image))
  },[])

  useEffect(() => {
      fetch(backendurl+"cps-show")
      .then(resslider => resslider.json())
      .then(slider => setSlider(slider))
  },[])

  // console.log("sloider",slider); 

    return(
  <div>
  <section className="view-more-wr">
    <div className="center-wrapper">
      <div className="view-more-blk wow fadeInDown">
        <h4>
          <a href="#"> <span data-content="View More">View More</span></a>
        </h4>
      </div>
    </div>
  </section>
<section className="our-client-wr" id="our-client-wr">
    <div className="center-wrapper">
        <div className="counter-area clearfix" >
            {item.map((post,index) => (
            <div className={'counter-blk counter left counter-blk-'+index} key={post._id}>
                <div className="counter-value">
                    <h3 data-count="750">{post.num}</h3>
                    <span>+</span>
                </div>
                <div className="counter-caption">
                    <h5>{post.name}</h5>
                </div>
            </div>
            ))}

        </div>
        <div className="testimonial-area">
            <div className="testimonial-head-blk">
                <div className="client-say-block">
                    <div className="quote-icon-img wow fadeInLeft">
                        <img src="./assets/images/testimonials_quotes_icon.svg" alt="Quote Icon Image" />
                    </div>
                    <div className="client-say-content wow fadeInRight">
                        <p>"{data.name}"</p>
                    </div>
                    <div className="client-say-head wow fadeInDown">
                        <h3>{data.title}</h3>
                    </div>
                </div>
                <div className="testimonial-head">
                    <h3>Testimonials</h3>
                </div>
            </div>
            <div className="testimonial-widget-area">
            
                <div className="testimonial-slider">
                  {slider.map((post,index) => (
                    <div className="testimonial-slide" key={post._id}>
                        <div className="testimonial-content-area clearfix">
                            <div className="testimonial-media-blk left">
                                <div className="video-layers">
                                    <figure className="video-btn" data-target="youtube"
                                        data-v-id={post.videourl}>
                                        <img src="./assets/images/testimonials_play_btn.svg" alt="Video Play Btn" />
                                        <figcaption>
                                            <a href="javascript:;">Play Video</a>
                                        </figcaption>
                                    </figure>
                                    <div className="video-circle circle-1"></div>
                                    <div className="video-circle circle-2"></div>
                                    <div className="video-circle circle-3"></div>
                                </div>
                                <div className="testimonial-img-blk">
                                    <figure className="testimonial-client-img">
                                        <img src="./assets/images/testimonials_img.png" alt="Testimonials Image" />
                                    </figure>
                                    <div className="box-shadow-box"></div>
                                </div>
                            </div>
                            <div className="testimonial-review-blk right">
                                <div>
                                    <p>
                                        {post.description}
                                    </p>
                                </div>
                                <div className="round-bg-btn testimonial-caption">
                                    <span data-hover="Brett Black">{post.name}</span>
                                    <p>Prisma Labs Inc. CANADA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     ))}
                </div>
           
            </div>
        </div>
    </div>

    <div className="popup-bg-wr"></div>
    <div className="popup-content">
        <div className="close-btn">
            <a href="javascript:void(0);">X</a>
        </div>
        <div className="popup-video">
            <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <video className="video-block" controls="true" autoplay="true" muted src="" type="video/mp4"></video>
        </div>
    </div>
</section>
     </div>
  )

}

export default ClientDetailsSection;