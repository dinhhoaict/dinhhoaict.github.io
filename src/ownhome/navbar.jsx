import React, { Component } from "react";
import { connect } from "react-redux";
import "./navbar_style.css";

function mapStateToProps(state) {
  return {};
}

class NavBar extends Component {
  render() {
    return <nav className="mynavbar navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
        <a className="navbar-brand" href="#">
          <img src="/images/about.jpg" alt="Logo" style={{ width: "40px" }} />
        </a>
        <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link" href="#Home">
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#About">
                    About
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#Skill">
                    Skill
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#Experience">
                    Experience
                </a>
            </li>
          </ul>
        </div>
      </nav>;
  }
}

export default connect(mapStateToProps)(NavBar);
