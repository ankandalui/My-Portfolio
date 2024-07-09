import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import facebook from "../../assets/facebook-icon.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9e8873q",
        "template_iqfaeib",
        form.current,
        "HU7dhrYIjNHTO0rV8"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      {" "}
      {/* <div id="clients">
                    <h1 className="contactPageTitle">My Clients</h1>
                    <p className="ClientDesc">
                      I have had the opportunity to work with a diverse group of companies.
                      Some of the notable companies I have worked with includes.
                    </p>
                    <div className="clientImgs">
                      <img src={Walmart} alt="Client" className="clientImg" />
                      <img src={Adobe} alt="Client" className="clientImg" />
                      <img src={Microsoft} alt="Client" className="clientImg" />
                      <img src={Facebook} alt="Client" className="clientImg" />
                    </div>
                  </div> */}{" "}
      <div id="contact">
        <h1 className="contactPageTitle"> Contact Me </h1>{" "}
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities{" "}
        </span>{" "}
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>{" "}
          <button type="submit" value="Send" className="submitBtn">
            Submit{" "}
          </button>{" "}
          <div className="links">
            <img src={facebook} alt="facebook" className="link" />
            <img src={instagram} alt="instagram" className="link" />
            <img src={twitter} alt="twitter" className="link" />
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </section>
  );
};

export default Contact;
