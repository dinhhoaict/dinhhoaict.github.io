"use strict";
import React, { Component } from "react";
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div class="container">
				<nav class="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
					<a class="navbar-brand" href="#">Bá Đình Hoài</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse align-content-end" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item active">
								<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/blog">Blog</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/about">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">My CV</a>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled" href="#">Disabled</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
