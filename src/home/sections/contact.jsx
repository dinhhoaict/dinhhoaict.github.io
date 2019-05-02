import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {};
}

class ContactSection extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <section className="colorlib-contact" data-section="contact">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div
                            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                            data-animate-effect="fadeInLeft"
                        >
                            <span className="heading-meta">Get in Touch</span>
                            <h2 className="colorlib-heading">Contact</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div
                                className="colorlib-feature colorlib-feature-sm animate-box"
                                data-animate-effect="fadeInLeft"
                            >
                                <div className="colorlib-icon">
                                    <i className="icon-globe-outline" />
                                </div>
                                <div className="colorlib-text">
                                    <p>
                                        <a href="#">info@domain.com</a>
                                    </p>
                                </div>
                            </div>

                            <div
                                className="colorlib-feature colorlib-feature-sm animate-box"
                                data-animate-effect="fadeInLeft"
                            >
                                <div className="colorlib-icon">
                                    <i className="icon-map" />
                                </div>
                                <div className="colorlib-text">
                                    <p>
                                        198 West 21th Street, Suite 721 New York
                                        NY 10016
                                    </p>
                                </div>
                            </div>

                            <div
                                className="colorlib-feature colorlib-feature-sm animate-box"
                                data-animate-effect="fadeInLeft"
                            >
                                <div className="colorlib-icon">
                                    <i className="icon-phone" />
                                </div>
                                <div className="colorlib-text">
                                    <p>
                                        <a href="tel://">+123 456 7890</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-md-push-1">
                            <div className="row">
                                <div
                                    className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                                    data-animate-effect="fadeInRight"
                                >
                                    <form action="">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name=""
                                                id="message"
                                                cols="30"
                                                rows="7"
                                                className="form-control"
                                                placeholder="Message"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="submit"
                                                className="btn btn-primary btn-send-message"
                                                value="Send Message"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;
