import React from "react";
import "./Skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> What I Do </span>{" "}
      <span className="skillDesc">
        I am a skilled and pssionate web designer & developer with expreience in
        creating visually & Functional appealing and user - friendly websites.I
        have a strong understanding of design and a keen eye for detail.I am
        proficient in HTML, CSS, JavaScript, React Js, Flutter as well as design
        software such as Adobe Photoshop, Adobe Premiere Pro.{" "}
      </span>{" "}
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesig" className="skillBarImg" />
          <div className="skillBarText">
            <h2> UI / UX Design </h2>{" "}
            <p>
              Crafting seamless and visually captivating experiences is not just
              a skill for me; it 's a passion that breathes life into pixels and
              transforms user interactions into unforgettable journeys{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2> Website Developing </h2>{" "}
            <p>
              As a web developer, I merge skillful coding with a passion for
              innovation, transforming lines of code into dynamic, user -
              centric websites that not only function flawlessly but also leave
              a lasting digital impression.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2> App Design </h2>{" "}
            <p>
              In the realm of app design, my skills converge with boundless
              passion, shaping pixels into intuitive interfaces and immersive
              experiences, where every detail is meticulously crafted to elevate
              user engagement and delight.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Skills;
