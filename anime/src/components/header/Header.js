import React from "react";
import "./header.scss";

class Head extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
              <a href="#">Winter</a>
              <i class="material-icons">arrow_drop_down</i>
              <ul className="drop-down winter">
                <li className="season">
                  <a href="#" className="season-link">
                    Winter 2019/2020
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Winter 2018/2019
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Winter 2017/2018
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Winter 2016/2017
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Winter 2015/2016
                  </a>
                </li>
              </ul>
            </li>
            <li className="hov">
              <a href="#">Spring</a>
              <i class="material-icons">arrow_drop_down</i>
              <ul className="drop-down spring">
                <li className="season">
                  <a href="#" className="season-link">
                    Spring 2019/2020
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Spring 2018/2019
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Spring 2017/2018
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Spring 2016/2017
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Spring 2015/2016
                  </a>
                </li>
              </ul>
            </li>
            <li className="hov">
              <a href="#">Summer</a>
              <i class="material-icons">arrow_drop_down</i>
              <ul className="drop-down summer">
                <li className="season">
                  <a href="#" className="season-link">
                    Summer 2019/2020
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Summer 2018/2019
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Summer 2017/2018
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Summer 2016/2017
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Summer 2015/2016
                  </a>
                </li>
              </ul>
            </li>
            <li className="hov">
              <a href="#">Fall</a> <i class="material-icons">arrow_drop_down</i>
              <ul className="drop-down fall">
                <li className="season">
                  <a href="#" className="season-link">
                    Fall 2019/2020
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Fall 2018/2019
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Fall 2017/2018
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Fall 2016/2017
                  </a>
                </li>
                <li className="season">
                  <a href="#" className="season-link">
                    Fall 2015/2016
                  </a>
                </li>
              </ul>
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
  }
}

export default Head;
