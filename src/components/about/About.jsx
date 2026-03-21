import React from "react";
import "./about.css";
import myPic from "../../assets/myPic.png";
import { FaAward } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { VscFolderOpened } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="top_section">
        <h5 className="text-light">Get to Know</h5>
        <h2>About me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={myPic} alt="my picture" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </div>
            <div className="about_card">
              <VscFolderOpened className="about_icon" />
              <h5>projects</h5>
              <small>40+ completed</small>
            </div>
            <div className="about_card">
              <FaUser className="about_icon" />
              <h5>Clients</h5>
              <small>200+ workwide</small>
            </div>
          </div>
          <p>
            Passionate web developer currently focused on building modern
            full-stack applications. I have a strong interest in JavaScript and
            the MERN stack, and I enjoy learning new technologies and improving
            my problem-solving skills every day. I have experience with HTML,
            CSS, JavaScript, and I am currently expanding my knowledge in
            backend development using Node.js, Express, and MongoDB. I enjoy
            building practical projects and continuously working on improving
            performance, scalability, and clean code practices. My goal is to
            become a professional full-stack developer and contribute to
            real-world projects that solve meaningful problems.
          </p>
          <a href="#contact" className="btn btn_primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
