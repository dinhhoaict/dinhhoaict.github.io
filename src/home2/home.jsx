import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class Wrapper extends Component {

    get_navbar(){
        return (
            <div></div>
        );
    }

    render() {
        return (
            <div id="container">
                {this.get_navbar()}
                <div id="main_container">
                    <section id="home">
                        <div id="my_jumbotron" className="jumbotron jumbotron-fluid text-center">
                            <h1 className="display-4">Bá Đình Hoài</h1>
                            <p className="lead">Python Back-end Developer</p>
                        </div>
                    </section>

                    <section id="about">
                    <div className="container">
                        <h2>About Me</h2>
                        <h4>Something about me</h4>
                        <p>Description About me , with full detail</p>
                    
                    </div>

                    </section>
                    <section id="skill" className="container-fuil">
                        <h2>My Skill</h2>
                        <h4>About my skill</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="process-wrapper">
                                    <h3>Python</h3>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>
                            </div>
                            <div className="col-md-6">
                                <div className="process-wrapper">
                                    <h3>SQL, No-SQL</h3>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="process-wrapper">
                                    <h3>Java</h3>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="process-wrapper">
                                    <h3>C#</h3>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="process-wrapper">
                                    <h3>Java</h3>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="process-wrapper">
                                    <h3>C#</h3>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="projects">


                    </section>
                    <section id="contact">

                    </section>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Wrapper);
