import React from "react";
import "./Intro.css";
import bg from "../../assets/myphoto.png";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello!</span>
        <span className="introtext">
          I'm <span className="introname">Ankan</span> <br />
          Website Developer
        </span>
        <p className="introPara">
          I am a skilled Website Designer & Developer (MERN Stack)
          <br /> with experience in creating visually appealing and user
          friendly websites.
        </p>
      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
