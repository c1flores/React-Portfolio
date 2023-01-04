import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hi, I'm Christian</h2>
        <p>I'm a full-stack web developer</p>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
      </div>
    </section>
  );
}

export default Home;