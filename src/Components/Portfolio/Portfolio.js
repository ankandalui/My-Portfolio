import React from "react";
import "./Portfolio.css";
import Portfolio1 from "../../assets/inspiron.png";
import Portfolio2 from "../../assets/ui.png";
import Portfolio3 from "../../assets/graphic.png";
import Portfolio4 from "../../assets/ecommerce.png";
import Portfolio5 from "../../assets/hospital.png";
import Portfolio6 from "../../assets/flutter.png";

const Portfolio = () => {
  return (
    <section id="works">
      <h2 className="workTitle"> My Projects </h2>{" "}
      <span className="workDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect.I am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.{" "}
      </span>{" "}
      <div className="worksImgs">
        <a href="https://inspiroy.vercel.app/" className="worksImgWrapper">
          <img src={Portfolio1} alt="Portfolio1" className="woksimg" />
        </a>{" "}
        <a
          href="https://drive.google.com/file/d/1ul7VXi9uV8d3G_J3IRBUyvijw5AqYEFc/view?usp=sharing"
          className="worksImgWrapper"
        >
          <img src={Portfolio2} alt="Portfolio2" className="woksimg" />
        </a>{" "}
        <a
          href="https://www.youtube.com/@amorkosh/videos"
          className="worksImgWrapper"
        >
          <img src={Portfolio3} alt="Portfolio3" className="woksimg" />
        </a>{" "}
        <a
          href="https://ikill.vercel.app/"
          className="worksImgWrapper"
        >
          <img src={Portfolio4} alt="Portfolio4" className="woksimg" />
        </a>{" "}
        <a
          href="https://github.com/ankandalui/Hospital-Manegement-Web.git"
          className="worksImgWrapper"
        >
          <img src={Portfolio5} alt="Portfolio5" className="woksimg" />
        </a>{" "}
        <a
          href="https://github.com/ankandalui/Flutter-Ui.git"
          className="worksImgWrapper"
        >
          <img src={Portfolio6} alt="Portfolio6" className="woksimg" />
        </a>{" "}
        <p> And Many more comming soon... </p>{" "}
      </div>{" "}
    </section>
  );
};

export default Portfolio;
