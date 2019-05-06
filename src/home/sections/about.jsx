import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class AboutSection extends Component {
    render() {
        return (
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="row row-bottom-padded-sm animate-box"
                                data-animate-effect="fadeInLeft"
                            >
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">
                                            About Me
                                        </span>
                                        <p>
                                            I primarily work at Backend but still have passion at frontend. Becoming full stack developer is my target.
                                            If you look to hire, please contact me or get in touch with me here.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div
                                    className="col-md-3 animate-box"
                                    data-animate-effect="fadeInLeft"
                                >
                                    <div className="services color-1">
                                        <span className="icon2">
                                            <i className="icon-bulb" />
                                        </span>
                                        <h3>Python Backend</h3>
                                    </div>
                                </div>
                                <div
                                    className="col-md-3 animate-box"
                                    data-animate-effect="fadeInRight"
                                >
                                    <div className="services color-2">
                                        <span className="icon2">
                                            <i className="icon-globe-outline" />
                                        </span>
                                        <h3>Android native</h3>
                                    </div>
                                </div>
                                <div
                                    className="col-md-3 animate-box"
                                    data-animate-effect="fadeInTop"
                                >
                                    <div className="services color-3">
                                        <span className="icon2">
                                            <i className="icon-data" />
                                        </span>
                                        <h3>Software</h3>
                                    </div>
                                </div>
                                <div
                                    className="col-md-3 animate-box"
                                    data-animate-effect="fadeInBottom"
                                >
                                    <div className="services color-4">
                                        <span className="icon2">
                                            <i className="icon-phone3" />
                                        </span>
                                        <h3>Application</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div
                                    className="col-md-12 animate-box"
                                    data-animate-effect="fadeInLeft"
                                >
                                    <div className="hire">
                                        <h2>
                                            I am happy to know you <br />that
                                            300+ projects done sucessfully!
                                        </h2>
                                        <a href="#" className="btn-hire">
                                            Hire me
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </section>
    );
  }
}

export default AboutSection;
