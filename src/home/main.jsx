import React, { Component } from "react";
import { connect } from "react-redux";
import HomeSection from "./sections/home";
import AboutSection from "./sections/about";
import ServiceSection from "./sections/services";
import SkillSection from "./sections/skill";
import EducationSection from "./sections/education";
import ExperienceSection from "./sections/experience";
import WorkSection from "./sections/work";
import BlogSection from "./sections/blog";
import ContactSection from "./sections/contact";

function mapStateToProps(state) {
    return {};
}

class Main extends Component {
    render() {
        return (
            <div>
                <div id="colorlib-main">
                    <HomeSection></HomeSection>
                    <AboutSection></AboutSection>
                    <ServiceSection></ServiceSection>

                    

                    {/* <div
                        id="colorlib-counter"
                        className="colorlib-counters"
                        style={{backgroundImage: "url(images/cover_bg_1.jpg);"}}
                        data-stellar-background-ratio="0.5"
                    >
                        <div className="overlay" />
                        <div className="colorlib-narrow-content">
                            <div className="row" />
                            <div className="row">
                                <div className="col-md-3 text-center animate-box">
                                    <span
                                        className="colorlib-counter js-counter"
                                        data-from="0"
                                        data-to="309"
                                        data-speed="5000"
                                        data-refresh-interval="50"
                                    />
                                    <span className="colorlib-counter-label">
                                        Cups of coffee
                                    </span>
                                </div>
                                <div className="col-md-3 text-center animate-box">
                                    <span
                                        className="colorlib-counter js-counter"
                                        data-from="0"
                                        data-to="356"
                                        data-speed="5000"
                                        data-refresh-interval="50"
                                    />
                                    <span className="colorlib-counter-label">
                                        Projects
                                    </span>
                                </div>
                                <div className="col-md-3 text-center animate-box">
                                    <span
                                        className="colorlib-counter js-counter"
                                        data-from="0"
                                        data-to="30"
                                        data-speed="5000"
                                        data-refresh-interval="50"
                                    />
                                    <span className="colorlib-counter-label">
                                        Clients
                                    </span>
                                </div>
                                <div className="col-md-3 text-center animate-box">
                                    <span
                                        className="colorlib-counter js-counter"
                                        data-from="0"
                                        data-to="10"
                                        data-speed="5000"
                                        data-refresh-interval="50"
                                    />
                                    <span className="colorlib-counter-label">
                                        Partners
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <SkillSection></SkillSection>

                    <EducationSection></EducationSection>

                    <ExperienceSection></ExperienceSection>

                    <WorkSection></WorkSection>

                    <BlogSection></BlogSection>

                    <ContactSection></ContactSection>
                </div>
            </div>
        );
    }
}

// export default connect(mapStateToProps)(Main);
export default Main;
