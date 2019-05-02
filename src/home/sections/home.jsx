import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {};
}

class HomeSection extends Component {
    render() {
        return (
            <section
                id="colorlib-hero"
                className="js-fullheight"
                data-section="home"
            >
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                        <li
                            style={{
                                backgroundImage: "url(images/img_bg_1.jpg);"
                            }}
                        >
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1>
                                                    Hi! <br />I'm Bá Đình Hoài
                                                </h1>
                                                <h2>
                                                    Full Stack Developer
                                                </h2>
                                                <p>
                                                    <a className="btn btn-primary btn-learn">
                                                        Download CV{" "}
                                                        <i className="icon-download4" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

// export default connect(
//     mapStateToProps,
// )(HomeSection);
export default HomeSection;
