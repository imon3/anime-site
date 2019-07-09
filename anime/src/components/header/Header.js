import React from "react";
import "./header.css";

const Head = () => {
  return (
    <header className="header">
      <nav className="top-nav">
        <ul>
          <li className="hov">
            <a href="#">notification</a>
          </li>
          <li className="hov">
            <a href="#">Log In</a>
          </li>
          <li className="hov">
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
      <nav className="bottom-nav">
        <ul className="top-ul">
          <li>
            <a href="#" className="home-link">
              I<span className="home-link-text">MON</span> A
              <span className="home-link-text">NIME</span>
            </a>
          </li>
        </ul>
        <ul className="bottom-ul">
          <li className="hov">
            <a href="#">
              <i class="material-icons">search</i>
            </a>
          </li>
          <li className="hov">
            <a href="#">Winter</a> <i class="material-icons">arrow_drop_down</i>
          </li>
          <li className="hov">
            <a href="#">Spring</a> <i class="material-icons">arrow_drop_down</i>
          </li>
          <li className="hov">
            <a href="#">Summer</a> <i class="material-icons">arrow_drop_down</i>
          </li>
          <li className="hov">
            <a href="#">Fall</a> <i class="material-icons">arrow_drop_down</i>
          </li>
          <li className="hov">
            <a href="#">TBA</a>
          </li>
          <li className="hov">
            <a href="#">Schedule</a>
          </li>
          <li className="hov">
            <a href="#">Headlines</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Head;
