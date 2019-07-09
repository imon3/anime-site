import React from "react";
import "./header.css";

const Head = () => {
  return (
    <header className="header">
      <nav className="top-nav">
        <a href="#">notification</a>
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
      </nav>
      <nav className="bottom-nav">
        <div>
          <a href="#" className="home-link">
            Imon Anime
          </a>
        </div>
        <div className="right-div">
          <a href="#">search</a>
          <a href="#">Winter</a>
          <a href="#">Spring</a>
          <a href="#">Summer</a>
          <a href="#">Fall</a>
          <a href="#">TBA</a>
          <a href="#">Schedule</a>
          <a href="#">Headlines</a>
        </div>
      </nav>
    </header>
  );
};

export default Head;
