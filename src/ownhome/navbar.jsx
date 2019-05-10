import React, { Component } from "react";
import { connect } from "react-redux";
import "./navbar_style.css";

function mapStateToProps(state) {
    return {
        menu : state.ownhome.menu
    };
}

class NavBar extends Component {
  render() {
    //   console.log("NavBar ",this.props.menu);
    return (
      <nav className="mynavbar navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
            <a className="navbar-brand" href="#"><img src="/images/about.jpg" alt="Logo"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav">
            {
                this.props.menu.map(item => {
                    return <li className="nav-item">
                        <a className="nav-link" href={"#" + item}>
                        {item}
                        </a>
                    </li>
                })
            
            }
        </ul>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(NavBar);
