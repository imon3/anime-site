import React from "react";
import "./header.css";

const Head = () => {
  return (
    <header className="header">
      <nav className="top-nav">
        <ul>
          <li>
            <a href="#">notification</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
      <nav className="bottom-nav">
        <div>
          <a href="#" className="home-link">
            Imon Anime
          </a>
        </div>
        <div className="right-div">
          <ul>
            <li>
              <a href="#">search</a>
            </li>
            <li>
              <a href="#">Winter</a>
            </li>
            <li>
              <a href="#">Spring</a>
            </li>
            <li>
              <a href="#">Summer</a>
            </li>
            <li>
              <a href="#">Fall</a>
            </li>
            <li>
              <a href="#">TBA</a>
            </li>
            <li>
              <a href="#">Schedule</a>
            </li>
            <li>
              <a href="#">Headlines</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Head;
