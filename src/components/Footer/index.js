import React from "react";

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/c1flores/"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/christian-flores-972551178/"
    },
    {
      name: "fab fa-goodreads",
      link: "https://www.goodreads.com/review/list/156639775?ref=nav_mybooks"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;

