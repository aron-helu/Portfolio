/* eslint-disable max-len */
import CV from '../images/Aron.pdf';
import './contact.css';

const Contact = () => (
  <div className="contact-container">
    <h1>Get In Touch</h1>
    <p className="contact-p">Although I am currently open to new opportunities, my inbox is always open for communication. Whether you have a question or simply want to say hello, I will make every effort to respond in a timely manner.</p>
    <div className="email">
      <div className="contact-links">
        <a href="mailto: aronmilahela@gmail.com">Send Hello</a>
      </div>
      <div className="contact-links">
        <a href={CV}>Resume</a>
      </div>
    </div>
  </div>
);

export default Contact;
