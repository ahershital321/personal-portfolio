import React from "react";
import { motion } from "framer-motion";
import profile from "../../assets/shital.jpeg";

function Hero() {
  return (
    <section className="hero">

      <motion.div
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <h3>Hello, I'm</h3>

        <h1>
          Shital Chandrakant Aher
        </h1>

        <p className="location">
📍 Nashik, Maharashtra, India
</p>

        <h2>
          Full Stack Java Developer
        </h2>

        <p>
          Passionate Full Stack Java Developer with
          strong knowledge of Java, JDBC, Hibernate,
          Spring, ReactJS and MySQL. Dedicated to
          building responsive and scalable web
          applications.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            View Projects
          </a>

          <a href="#contact">
            Contact Me
          </a>
          <a
  href={"#contacts"}
  target="_blank"
  rel="noreferrer"
>
  View Resume
</a>

        </div>

      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <img src={profile} alt="Shital" />

      </motion.div>

    </section>
  );
}

export default Hero;