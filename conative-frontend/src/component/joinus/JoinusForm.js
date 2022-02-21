import React,{ useEffect, useState } from "react";
import { backendurl } from '../constants';

function JoinusForm(props) {

    return(
        <div>
          <form action="#" method="POST" onSubmit="" id="contactformreset">     
              <div className="right" id="contact-page">
              <div style={{'textAlign':'center'}}>
                <h1 className="section-title wow fadeInDown">Get In <span style={{'color':'#f96400'}}>Touch</span></h1>
                 If you have any query regarding our service or If you just simply want to say hi then get in touch and I will get back to as soon as possible.
              </div>
                <div className="wow slideInRight">
                    <div>
                        <div><label className="label-contact">Name</label><input type="text" name="name" placeholder="Enter name" id="name" required/></div>
                        <div><label className="label-contact">Contact</label><input type="text" name="contact" placeholder="Enter contact" id="contact" required/></div>
                        <div><label className="label-contact">Email</label><input type="text" name="email" placeholder="Enter email" id="email" required/></div>
                        <div><label className="label-contact">Position</label>
                         <select>
                         <option value="">Select Position</option>
                         <option value="developer">Web Developer</option>
                         <option value="design">Wed Design</option>
                         </select>
                        </div>
                        <div><label className="label-contact">Image</label><input type="file" name="uploadfile"/></div>
                      <p>
                       <input type="button" name="submit" value="APPLY NOW"/>
                   </p>
                   </div>

                 </div>
              </div>
          </form>
        </div>
      )
};

export default JoinusForm;