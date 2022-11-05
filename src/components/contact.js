import React from "react";
import "../App.css";
import Footer from "./footer";
import { useState } from "react";

function Contact() {
  const message_placeholder =
    "Send me a message and I'll reply you as soon as possible...";
  let error_message = document.querySelector(".error-message");
  let contact_form = document.querySelector(".email-form-message");
  const [Form_Message, set_Form_Message] = useState("");
  const [form_error, set_form_error] = useState(true)

  const status = "Please enter a message";
 
   function successMessage(){
    alert("sent"); 
 };
  function err_Respond (){
    //  error_message.innerText = status;
      set_form_error(false)
  };
 
  function Validate() {
    Form_Message.length === 0 ? err_Respond() : successMessage();
  }

  function FormValue(e) {
    set_Form_Message(e.target.value);
    set_form_error(true)
    
  }

  return (
    <React.Fragment>
        <section className="contact-container">
          <div>
          <div className="contact-inner-container">
            <div>
            <div className="contact-title">Contact Me</div>
            <p className="contact-intro">
             Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <div className="form-container">
              <div className="form-name-field">
                <div className="input-wrapper">
                  <label htmlFor="name" className="contact-form">
                    First Name
                  </label>
                  <input id="name" type="text" className={form_error ? "email-form-message input-field": "contact-fom-error "} />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="lastname" className="contact-form">
                    Last Name
                  </label>
                  <input type="text" className={form_error ? "email-form-message input-field": "contact-fom-error "} id="lastname" />
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
                  typeof="text"
                  className={form_error ? "email-form-message": "contact-fom-error "}
                  placeholder={message_placeholder}
                  value={Form_Message}
                  onChange={FormValue}
                ></textarea>
                <div className="error-message"></div>
              </div>
              <span className="radio_button">
                <input type="checkbox" id="" /> &nbsp;
                <span>
                  You agree to providing your data to name who may contact you.
                </span>
              </span>
            </div>
            <div className="form-footer-text">
              <input type="button" value="Send message" onClick={Validate} />
            </div>
          </div>
          </div>
        </section>
        <Footer />
      
    </React.Fragment>
  );
}

export default Contact;
