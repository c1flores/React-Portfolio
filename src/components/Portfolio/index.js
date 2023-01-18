import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "Deja-Brew",
      description: "MERN Stack",
      link: "https://github.com",
      repo: "https://github.com/c1flores/Deja-Brew",
    },
    {
      name: "Dinner-Spinner",
      description: "JavaScript/Node/Express/SQL/RESTful API",
      link: "https://dinner-spinnerrr.herokuapp.com/",
      repo: "https://github.com/c1flores/Dinner-Spinner",
    },
    {
      name: "Bottoms-Up",
      description: "HTML/CSS/Bootstrap/Server-Side API",
      link: "https://leinadzz.github.io/Bottoms-Up-API/",
      repo: "https://github.com/c1flores/Bottoms-Up-API",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
