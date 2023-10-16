import React from "react";
import "./Works.css";
import porfolio1 from "../../assets/porfolio1.jpg";
import porfolio2 from "../../assets/porfolio2.jpg";


const Works = () => {
  return (
    <section className="works">
      <span className="texttitle">My projects</span>
      <span className="textdes">
        i am a worked and passionate web designer with experience in creating
        visually appealing and user-friendly website. i have a strong
        understanding of design and keep eye for detail. i am proficient HTML ,
        CSS and JavaScript, as well as design software such a Adobe Photoshop
        and illustrator.
      </span>

      <div className="worksbars">
        <img src={porfolio1} alt="porfolio1" className="workbar"/>
        <img src={porfolio2} alt="porfolio2" className="workbar"/>
        <img src={porfolio1} alt="porfolio1" className="workbar"/>
        <img src={porfolio2} alt="porfolio2" className="workbar"/>
        <img src={porfolio1} alt="porfolio1" className="workbar"/>
        <img src={porfolio2} alt="porfolio2" className="workbar"/>
      </div>
      <button className="btnwork">See More</button>
    </section>
  );
};

export default Works;
