import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
  FaDatabase
} from "react-icons/fa";

import { SiHibernate, SiSpring } from "react-icons/si";

function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Hibernate", icon: <SiHibernate /> },
    { name: "Springboot", icon: <SiSpring /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "GitHub", icon: <FaGithub /> }
  ];

  return (
    <section id="skills">

      <h1 className="section-title">
        Technical Skills
      </h1>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;