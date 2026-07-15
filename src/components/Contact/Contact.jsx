import React from "react";
import {
 FaPhone,
 FaEnvelope,
 FaLinkedin,
 FaGithub
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">

      <h1 className="section-title">
        Contact Me
      </h1>

      <div className="contact-card">

        <p>
          📍 Nashik, Maharashtra, India
        </p>

        <p>
          <FaPhone />
          &nbsp;
          <a href="tel:8010209983">
            8010209983
          </a>
        </p>

        <p>
          <FaEnvelope />
          &nbsp;
          <a href="mailto:shitalaher884@gmail.com">
            shitalaher884@gmail.com
          </a>
        </p>

        <p>
          <FaLinkedin />
          &nbsp;
          <a
            href="https://www.linkedin.com/in/shital-aher"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn 
          </a>
        </p>

        <p>
          <FaGithub />
          &nbsp;
          <a
            href="https://github.com/ahershital321"
            target="_blank"
            rel="noreferrer"
          >
            GitHub 
          </a>
        </p>

      </div>

    </section>
  );
}

export default Contact;