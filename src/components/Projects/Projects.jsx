import React from "react";

function Projects() {

  const projects = [
    {
      title:"Skill Exchange Platform",
      tech:"ReactJS | Spring Boot | MySQL",
      desc:"Platform that allows users to share and exchange skills with other users."
    },

    {
      title:"Campus Connect Portal",
      tech:"Java | JSP | Servlet | MySQL",
      desc:"Portal that helps students connect, communicate and access academic information."
    },

    {
      title:"Employee Management System",
      tech:"Spring Boot | Hibernate | MySQL",
      desc:"Application to manage employee records using CRUD operations."
    }
  ];

  return (
    <section id="projects">

      <h1 className="section-title">
        Projects
      </h1>

      <div className="project-container">

        {projects.map((project,index)=>(
          <div className="project-card" key={index}>

            <h2>{project.title}</h2>

            <h4>{project.tech}</h4>

            <p>{project.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;