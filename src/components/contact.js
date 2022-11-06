import React from "react";
import "../App.css";
import Footer from "./footer";
import { useState } from "react";
import { renderToString } from 'react-dom/server';

function Contact() {
  const message_placeholder =
    "Send me a message and I'll reply you as soon as possible...";
    const error_message= document.querySelector(".error-message")
     
  const [Form_Message, set_Form_Message] = useState("");
  const [form_error, set_form_error] = useState(true);
  const [First_name, set_First_name]= useState("");
  const [Last_name, set_Last_name]= useState("");
  const [form_error_textarea, set_form_error_textarea]= useState(true);

  


  function err_Respond (){
      set_form_error(false);
      set_form_error_textarea(true)
  };
 
  function Validate() {
    if((Form_Message.length === 0) &&(First_name.length === 0) && (Last_name.length === 0)){
      err_Respond();
      
      set_form_error_textarea(false)
      

    }
    else if(Form_Message.length === 0 ){
      
        set_form_error_textarea(false)
    }
    else{
      alert("sent")
      
    }

  }
  function lastName(e){
    set_Last_name(e.target.value)
  }
  function firstName(e){
    set_First_name(e.target.value)
  }
  function FormValue(e) {
    set_form_error_textarea(true)
    set_form_error(true);
    set_Form_Message(e.target.value);
 
    
  }

  return (
    <React.Fragment>
        <section className="contact-container">
          <div className="contact-inner-container">
            <div>
            <div className="contact-title">Contact Me</div>
            <p className="contact-intro">
             Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <div className="form-container">
              <div className="form-name-field">
                <div className="input-wrapper">
                  <label htmlFor="first_name" className="contact-form" >
                    First Name
                  </label>
                  <input id="first_name" type="text" className={form_error ? "email-form-message input-field": "contact-fom-error "}  value={First_name}  onChange={firstName}/>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="last_name" className="contact-form">
                    Last Name
                  </label>
                  <input type="text" className={form_error ? "email-form-message input-field": "contact-fom-error "} id="last_name" value={Last_name} onChange={lastName}/>
                </div>
              </div>
              <div className="input-wrapper col-3">
                <label htmlFor="email" className="contact-form">
                  Email
                </label>
                <input
                  type="email"
                  className={form_error ? "email-form-message input-field": "contact-fom-error "}
                  id="email"
                  placeholder="yourname@email.com"
                />
              </div>
              <div className="input-wrapper col-3">
                <label htmlFor="email" className="contact-form">
                  Message
                </label>
                <textarea
                  id="message"
                  className={form_error_textarea ? "email-form-message": "contact-fom-error "}
                  placeholder={message_placeholder}
                  value={Form_Message}
                  onChange={FormValue}

                  
                ></textarea>
                {form_error_textarea ? null : <div className="error-message">Please enter a message</div>} 
              </div>
              <span className="radio_button">
                <input type="checkbox" id="" /> &nbsp;
                <span>
                  You agree to providing your data to Peter Samuel who may contact you.
                </span>
              </span>
            </div>
            <div className="form-footer-text">
              <input type="button" value="Send message" onClick={Validate} id="btn__submit"/>
            </div>
          </div>

        </section>
        <Footer />
      
    </React.Fragment>
  );
}

export default Contact;
