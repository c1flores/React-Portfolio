import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "Deja-Brew",
      description: "MERN Stack",
      link: "Soon-To-Be-Posted-On-Heroku",
      repo: "https://github.com/c1flores/Deja-Brew",
    },
    {
      name: "Dinner-Spinner",
      description: "JavaScript/Node/Express/SQL/RESTful-API",
      link: "https://dinner-spinnerrr.herokuapp.com/",
      repo: "https://github.com/c1flores/Dinner-Spinner",
    },
    {
      name: "Tech-Blog",
      description: "JavaScript/Node/Express/SQL/Handle-bars/HTML/CSS",
      link: "https://techh-bloggg.herokuapp.com/",
      repo: "https://github.com/c1flores/Tech-Blog",
    },
    {
      name: "Weather-Dashboard",
      description: "JavaScript/jQuery/HTML/CSS/Server-Side API/Web API",
      link: "https://c1flores.github.io/Weather-Dashboard/",
      repo: "https://github.com/c1flores/Weather-Dashboard",
    },
    {
      name: "Bottoms-Up",
      description: "JavaScript/HTML/CSS/Bootstrap/Server-Side API",
      link: "https://leinadzz.github.io/Bottoms-Up-API/",
      repo: "https://github.com/c1flores/Bottoms-Up-API",
    },
    {
      name: "Coding-Assessment",
      description: "JavaScript/HTML/CSS/Local-Storage API",
      link: "https://c1flores.github.io/Coding-Assessment/",
      repo: "https://github.com/c1flores/Coding-Assessment",
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
