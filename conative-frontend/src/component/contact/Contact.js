import React from 'react';
import axios from 'axios';
import './contact.css';
import { backendurl } from '../constants';


class Contact extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        error: null,
        contactid: [],
        response: {},
        form: [],
        msgVisible: false
      }

      this.getContact = this.getContact.bind(this);
    }

  componentDidMount() {
    const apiUrl = backendurl+'contact-show';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            contactid: result,
            form : result.form,
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

 getContact(e){
  // alert("hello");
  e.preventDefault();
  const { error } = this.state;

      var yourname = document.getElementById(`name`).value;
      var subject = document.getElementById(`subject`).value;
      var youremail = document.getElementById(`email`).value;
      var yourmessage = document.getElementById(`message`).value;

     const data = {
      "name":yourname,
      "subject":subject,
      "email":youremail,
      "message":yourmessage
     }

    let apiUrl = backendurl+"createContact";

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append("Access-Control-Allow-Origin", "*");


    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    };

    axios.post(apiUrl, options)
      .then(res => res.json())
      .then(result => {
         result.json();
      },
      (error) => {
        this.setState({ error });
      }
    )
      e.target.reset();
      this.setState({ msgVisible: true });
 } 

  render() {
    const { error, contactid, form } = this.state;
       
      const contact = form.map(item => (
   
        item.type
   
      )) 

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
   <div  className="prolist" >
    <section className="banner-wr contact-form" style={{'backgroundImage': "url('./assets/images/map-2.jpg')"}}>
      <div className="">
      <div className="center-wr">
        <div className="clearfix" >
          <div className="left">
       
          </div>
          <form action="#" method="POST" onSubmit={this.getContact} id="contactformreset">     
          <div className="right" id="contact-page">
          <div style={{'textAlign':'center'}}>
            <h1 className="section-title wow fadeInDown">Get In <span style={{'color':'#f96400'}}>Touch</span></h1>
             If you have any query regarding our service or If you just simply want to say hi then get in touch and I will get back to as soon as possible.
          </div>
            <div className="wow slideInRight">
            <input type="hidden" id="contactid" value={contactid._id} />
            {form.map((item,index) => (
                <div key={index}>
                    {item.type == 'text' && <div><label className="label-contact">{item.name.charAt().toUpperCase() + item.name.slice(1)}</label><input type="text" name={item.name} placeholder={item.name} id={item.name} required/></div>}
                    {item.type == 'email' && <div><label className="label-contact">{item.name.charAt().toUpperCase() + item.name.slice(1)}</label><input type="text" name={item.name} placeholder={item.name} id={item.name} /></div>}
                    {item.type == 'textarea' && <div><label className="label-contact">{item.name.charAt().toUpperCase() + item.name.slice(1)}</label><textarea name={item.name} id={item.name} placeholder={item.name}></textarea></div>}
                  <p>
               {item.type == 'button' && <input type={item.name} name={item.name} value={item.name}/>}
               </p>
               </div>
            ))}
            {this.state.msgVisible && <div className="contact-success">Contact Submit SuccessFully</div>}

             </div>
          </div>
          </form>
        </div>
        </div>
        </div>
      </section>
        </div>
      )
    }
  }
}

export default Contact;