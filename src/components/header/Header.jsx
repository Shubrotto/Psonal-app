import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleScroll = () => {
    window.scrollY > 0
      ? {
          overflowY: "scroll",
          height: "90px",
          background: "#e7e7e7",
        }
      : {
          overflowY: "scroll",
          background: "#e7e7e7",
          height: "0",
        };
    window.pageYOffset > 100 ? "display: block" : "display: none";
  };
  return (
    <div id="header" onScroll={handleScroll}>
      <div className="wrapper">
        <div className="header_left">
          <Link className="logo" to="/">
            <span>J</span>
          </Link>
        </div>
        <div className="header_right">
          <i
            className="fa fa-bars menu_icon"
            aria-hidden="true"
            onClick={() => setToggle(!toggle)}
          ></i>
          {toggle === true ? (
            <div
              id="navbar"
              className="navbar"
              onClick={() => setToggle(toggle)}
              style={{ display: "block" }}
            >
              <div className="navbar_left">
                <ul className="nav_lists">
                  <Link className="nav_link" to="/about">
                    <li className="nav_list">about</li>
                  </Link>
                  <Link className="collapse nav_link" to="/experience">
                    <li className="nav_list">
                      experience
                      <span className="sub_nav">
                        <ul>
                          <li>experience 1</li>
                          <li>experience 2</li>
                        </ul>
                      </span>
                    </li>
                  </Link>
                  <Link className="nav_link" to="/project">
                    <li className="nav_list">project</li>
                  </Link>
                  <Link className="nav_link" to="/contact">
                    <li className="nav_list">contact</li>
                  </Link>
                </ul>
              </div>
              <div className="navbar_right">
                <button className="btn">Resume</button>
                <button className="btn">Hire Me</button>
              </div>
            </div>
          ) : (
            <div id="navbar" className="navbar">
              <div className="navbar_left">
                <ul className="nav_lists">
                  <Link className="nav_link" to="/about">
                    <li className="nav_list">about</li>
                  </Link>
                  <Link className="collapse nav_link" to="/experience">
                    <li className="nav_list">
                      experience
                      <span className="sub_nav">
                        <ul>
                          <li>experience 1</li>
                          <li>experience 2</li>
                        </ul>
                      </span>
                    </li>
                  </Link>
                  <Link className="nav_link" to="/project">
                    <li className="nav_list">project</li>
                  </Link>
                  <Link className="nav_link" to="/contact">
                    <li className="nav_list">contact</li>
                  </Link>
                </ul>
              </div>
              <div className="navbar_right">
                <button className="btn">Resume</button>
                <button className="btn">Hire Me</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;