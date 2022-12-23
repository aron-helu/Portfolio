/* eslint-disable max-len */
import React, { useState } from 'react';
import armi from '../images/IMG-20220820-WA0003.jpg';
import './About.css';

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div className="more-about">
      I previously worked remotely as an intern for 4 months in Viragoes located in Atlanta, Georgia, United States, as a front-end developer for vending machines&apos; touchless checkout technology. Customers simply use their phone camera pointed at the screen and are instantly directed to a website through which they can control the machine in real-time,
      select products, view information, buy, and check out the product. To achieve this development, we used a framework called React for the front-end and the Django Rest framework for the back-end.
      <br />
      I have good planning and organizing abilities to complete tasks and always meet deadlines. I am an independent worker who successfully meets the challenges of a fast-paced environment given requirements, documents, suggestions, and design solutions. For the moment,
      I&apos;m looking for a full-stack development position. For the past year, I have been solving problems through coding and developing great websites and apps.  experienced with the latest cutting-edge development tools and procedures.
    </div>
  );
  const linkName = readMore ? 'Read Less << ' : 'Read More >>';
  return (
    <div className="about">
      <div className="social-media">
        <a href="https://github.com/aron-helu" alt="github-account"><i className="fab fa-github" /></a>
        <a href="https://angel.co/u/aron-abraham" alt="angllist-account"><i className="fab fa-angellist" /></a>
        <a href="https://www.linkedin.com/in/aron-abraham/" alt="linkedin-account"><i className="fab fa-linkedin" /></a>
        <a href="mailto: aronmilahela@gmail.com" alt="send-email"><i className="material-icons">mail_outline</i></a>
      </div>
      <div className="text-container">
        <h1 className="about-header">
          About Me
          <hr />
        </h1>
        <div className="p-container">
          <div className="p-about">
            “Hello! My name is Aron. I am a full-stack developer completing Microverse an intense hands-on online programming school that teaches software while cracking real code projects for 8 hours a day remotely with fantastic partners from around the world in a multicultural environment that encourages kindness and collaboration.
            I am studying to develop skills that others need in software solutions. Solving problems is one of the soft skills I have mastered, as people will always need them. Developing these skills provides me with opportunities to enhance your company&apos;s needs and requirements, and I am an absolute opportunist.
            I have a deep passion for technology and the ability to change lives with code.
            <br />
            {readMore && extraContent}
            <button type="button" className="read-more-link" onClick={() => { setReadMore(!readMore); }}><h2>{linkName}</h2></button>
          </div>
          <div className="armi-img-container">
            <img className="armi-img" src={armi} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
