import React,{ useEffect, useState } from "react";
import { backendurl } from '../constants';
// import JoinusForm from './JoinusForm';

function Join(props) {

const rawHTML = `<section className="banner-wr" >
    <div class="other-page-title" style="width:100%; background-color: #2b201c!important;  height: 100px!important; text-align:center; color:#ffffff; padding-top: 44px; text-transform:uppercase;"><h2 ><b>Join Us</b></h2></div>
  <div class="center-wr">
  <br></br>
  <img src="https://conativeitsolutions.com/wp-content/uploads/2018/07/join-us.jpg" alt="" style="width:100%;height:500px;"/>
  <div class="aboutus-first-right-wr">
  <br>
        <form action="#" method="POST" onSubmit="" id="contactformreset">     
          <div className="right" id="contact-page">
          <div style={{'textAlign':'center'}}>
            <h1 className="section-title wow fadeInDown">Apply For Job</h1>
            <br></br>
          </div>
            <div className="wow slideInRight">
                <div>
                    <div><label className="label-contact">Name</label><input type="text" name="name" placeholder="Name" id="name" required/></div>
                    <div><label className="label-contact">Contact</label><input type="text" name="contact" placeholder="Contact" id="contact" required/></div>
                    <div><label className="label-contact">Email</label><input type="text" name="email" placeholder="Email" id="email" required/></div>
                    <div><label className="label-contact">Position</label>
                     <select name="position">
                     <option value="">Position</option>
                     <option value="Web Developer">Web Developer</option>
                     <option value="Graphic Designer">Graphic Designer</option>
                     <option value="Business Development Executive">Business Development Executive</option>
                     <option value="Search Engine Optimization">Search Engine Optimization</option>
                     </select>
                    </div>
                    <div><input type="file" name="uploadfile"/></div>
                  <p>
                   <input type="button" name="submit" value="APPLY NOW"/>
               </p>
               </div>

             </div>
          </div>
          </form>
  </div>
  </div>
</section>`;

    return(
        <div>
            { <div dangerouslySetInnerHTML={{ __html: rawHTML }} /> }
        </div>
      )
};

export default Join;
