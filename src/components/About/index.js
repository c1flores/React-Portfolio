import React from "react";
import Avatar from '@mui/material/Avatar';
import avatarImage from "../../assets/small/Personal-Pic.png"

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <Avatar alt = "avatar"  src = {avatarImage}   sx={{ width: 128, height: 128 }}> </Avatar>
        </div>
        <p>
        An enthusiastic learner and highly motivated individual, who is a recent
        graduate from the University of California, San Diego. I enjoy designing
        and coding beautifully simple things. I am an avid book worm and film
        junkie.
      </p>
      </div>
    </section>
  );
}

export default About;
