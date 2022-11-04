import React from "react";
import "../App.css";
import Footer from "./footer";

function Contact() {
  const val= "Send me a message and I'll reply you as soon as possible..."
  function validate()
{
  
}  
return (
    <React.Fragment>
      <div className="App">
        <section className="contact-container">
          <div className="contact-inner-container">
            <div className="contact-title">Contact Me</div>
            <div className="contact-intro">
              Hi there, contact me to ask me about anything you have in mind.
            </div>
            <div className="form-container">
              <div class="form-name-field">
                <div className="input-wrapper">
                  <label for="name" class="contact-form">First Name</label>
                  <input id="name" typeof="name" className="input-field" />
                </div>
                <div className="input-wrapper">
                  <label for="lastname" class="contact-form">Last Name</label>
                  <input typeof="name" className="input-field" />
                </div>
              </div>
              <div className="input-wrapper col-3">
                <label for="email" class="contact-form">Email</label>
                <input typeof="email" className=" input-field" />
              </div>
              <div className="input-wrapper col-3">
                <label for="email" class="contact-form">Message</label>
                <textarea typeof="text" className="" placeholder={val}></textarea>
                <div className="error-message">
                  
                </div>
              </div>
            </div>
            <div className="form-footer-text">
              <p>You agree to providing your data to name who may contact you.</p>
              <input typeof="button" value="Send message" onClick={validate}/>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    
    </React.Fragment>
  );
}

export default Contact;
