import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "Bá Đình Hoài",
            position : "Full Stack Developer",
            location : "in Viet Nam"
        };

        this.navmenu = {
            home : "Home",
            about : "About",
            services : "Services",
            skill : "Skill",
            education : "Education",
            experience : "Experience",
            work: "Work",
            blog: "Blog",
            contact: "Contact"

        };
    }
    
    render() {
        return (
            <div>
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                    <div className="text-center">
                        <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}></div>
                        <h1 id="colorlib-logo"><a href="index.html">{this.state.name}</a></h1>
                        <span className="position"><a href="#">{this.state.position}</a> {this.state.location}</span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li className="active"><a href="#" data-nav-section="home">{this.navmenu.home}</a></li>
                                <li><a href="#" data-nav-section="about">{this.navmenu.about}</a></li>
                                <li><a href="#" data-nav-section="services">{this.navmenu.services}</a></li>
                                <li><a href="#" data-nav-section="skills">{this.navmenu.skill}</a></li>
                                <li><a href="#" data-nav-section="education">{this.navmenu.education}</a></li>
                                <li><a href="#" data-nav-section="experience">{this.navmenu.experience}</a></li>
                                <li><a href="#" data-nav-section="work">{this.navmenu.work}</a></li>
                                <li><a href="#" data-nav-section="blog">{this.navmenu.blog}</a></li>
                                <li><a href="#" data-nav-section="contact">{this.navmenu.contact}</a></li>
                            </ul>
                        </div>
                    </nav>

                    <div className="colorlib-footer">
                        <ul>
                            <li><a href="#"><i className="icon-facebook2"></i></a></li>
                            <li><a href="#"><i className="icon-twitter2"></i></a></li>
                            <li><a href="#"><i className="icon-instagram"></i></a></li>
                            <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                        </ul>
                    </div>

                </aside>
            </div>
        );
    }
}

export default Sidebar;