import React, { Component } from "react";
import Header from "../home/header";
import MainContainer from "./MainContainer";
import PinContainer from "./PinContainer";
class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div class="container">
				<Header />
				<PinContainer/>

				<MainContainer />
			</div>
		);
	}
}

export default Blog;