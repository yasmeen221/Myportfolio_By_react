import React from "react";
import "./Skills.css";
import uidesign from "../../assets/uidesign.png";
import webdesign from "../../assets/webdesign.png";
import appdesign from "../../assets/appdesign.png";

const Skills = () => {
  return (
    <section className="skills">
      <span className="texttitle">About Me</span>
      <span className="yasmeen">my name is Yasmeen Mostafa</span>
      <span className="textdes">
      Passionate and driven front-end developer with a 
      solid foundation in web development technologies such as HTML, CSS, and JavaScript.
      I am eager to apply my skills and knowledge to create beautiful and responsive websites and applications that enhance the user experience. I thrive in collaborative environments and am always looking for new challenges to learn and grow in my role. I am committed to delivering high-quality work that meets client needs and exceeds expectations. Let's connect to explore how we can work together
       to create dynamic and innovative web solutions.
      </span>

      <div className="skillsbars">
        <div className="skillbar">
          <img src={uidesign} alt="uidesign" className="skillimg" />
          <div className="skillsdes">
            <h1>UI&UX Design</h1>
            <p>This a demo text, you can write your own content here</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={webdesign} alt="webdesign" className="skillimg" />
          <div className="skillsdes">
            <h1>Web Design</h1>
            <p>This a demo text, you can write your own content here</p>
          </div>
          </div>
          <div className="skillbar">
            <img src={appdesign} alt="appdesign" className="skillimg" />
            <div className="skillsdes">
              <h1>App Design</h1>
              <p>This a demo text, you can write your own content here</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
