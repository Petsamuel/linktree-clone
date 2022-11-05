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
  // const noMessage = Form_Message === "" || Form_Message.length === 0;
  const status = "Please enter a message";

  const err_Respond = () => {
    return contact_form.classList.add("contact-fom-error");
  };
  function Validate() {
    Form_Message.length <= 0 ? err_Respond() : alert("sent");
  }

  function FormValue(e) {
    set_Form_Message(e.target.value);
    error_message.innerHTML = " ";
    contact_form.classList.remove("contact-fom-error");
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
              <div className="form-name-field">
                <div className="input-wrapper">
                  <label htmlFor="name" className="contact-form">
                    First Name
                  </label>
                  <input id="name" type="text" className="input-field" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="lastname" className="contact-form">
                    Last Name
                  </label>
                  <input type="text" className="input-field" id="lastname" />
                </div>
              </div>
              <div className="input-wrapper col-3">
                <label htmlFor="email" className="contact-form">
                  Email
                </label>
                <input
                  type="email"
                  className="input-field"
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
                  className="email-form-message"
                  placeholder={message_placeholder}
                  value={Form_Message}
                  onChange={FormValue}
                ></textarea>
                <div className="error-message">{status}</div>
              </div>
              <span className="radio_button">
                <input type="checkbox" id="" /> &nbsp;{" "}
                <span>
                  You agree to providing your data to name who may contact you.
                </span>
              </span>
            </div>
            <div className="form-footer-text">
              <input type="button" value="Send message" onClick={Validate} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Contact;
