import React from "react";
import "./Contact.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import facebook from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pl52l67', 'template_ojeziea', form.current, 'DMnO58TaTQWuMKvlpGypX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="twocontact">
      <div className="clientsection">
        <h1 className="clienthead">Resume</h1>
        <span className="clientdes">
        can download my resume to know my projects and my certification and my skills 
        </span>
        



        <div className="clientimages">
        <a className="yasmeencv" href="https://drive.google.com/file/d/1VsseiFdUGsTSnUw0Sp6ihaCYpAesi2F6/view?usp=drive_link" target="blank">Download resum</a>
          {/* <img src={image1} alt="image1" className="clientimage" id="im1" />
          <img src={image2} alt="image2" className="clientimage" id="im1" />
          <img src={image3} alt="image3" className="clientimage" />
          <img src={image4} alt="image4" className="clientimage" /> */}
        </div>
      </div>
      <div className="contactsection">
        <h1 className="contacthead">Contact Me</h1>
        <span className="contactdes">please fill out the form below to discuss any work opportunities</span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name"name="your_name"/>
            <input type="email" className="email" placeholder="Your Email" name="your_email"/>
            <textarea className="message" type="message" rows="5" placeholder="Your Message"></textarea>
            <button className="submitbtn" type="submit" value="send">Submit</button>

        </form>
      </div>
      <div className="links">
        <img src={facebook} alt="facebook" className="icon"/>
        <img src={linkedin} alt="linkedin" className="icon"/>
        <img src={github} alt="github" className="icon"/>
        

      </div>
    </section>
  );
};

export default Contact;
