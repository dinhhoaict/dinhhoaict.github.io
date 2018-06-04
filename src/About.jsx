import React, { Component } from "react";
import PropTypes from "prop-types";

class About extends Component {
  render() {
  return (<div>
      About
  </div>);
  }
}

About.propTypes = {
  name: PropTypes.array,
  title: PropTypes.string.isRequired
};

export default About;
