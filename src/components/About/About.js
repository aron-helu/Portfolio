/* eslint-disable max-len */
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import armi from '../images/AronPng.png';
import './About.css';

const About = () => (
  <div className="about">
    <div className="text-container">
      <h1 className="about-header">
        About Me
        <hr />
      </h1>
      <div className="p-container">
        <div className="social-media-container">
          <div className="social-media">
            <a href="https://github.com/aron-helu" alt="github-account"><i className="fab fa-github" /></a>
            <a href="https://angel.co/u/aron-abraham" alt="angllist-account"><i className="fab fa-angellist" /></a>
            <a href="https://www.linkedin.com/in/aron-abraham/" alt="linkedin-account"><i className="fab fa-linkedin" /></a>
            <a href="mailto: aronmilahela@gmail.com" alt="send-email"><i className="material-icons">mail_outline</i></a>
          </div>
        </div>
        <div className="content-about">
          <div className="p-about">
            I am a skilled full-stack developer with experience in both Microverse and a remote internship. I am proficient in the latest tools and techniques, a strong communicator and team player with a passion for technology. I have a track record of meeting deadlines independently and am eager to join a company where I can make a positive impact and continue to grow as a developer. My portfolio of projects is available upon request.
          </div>
          <div className="armi-container">
            <img className="armi-img" src={armi} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
