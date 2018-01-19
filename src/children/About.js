import React, { PropTypes, Component } from "react";
import "./About.css";

class About extends Component {
	render() {
		return(
			<div className="about">
				<div className="about-image">
					<img src="#"/>
				</div>
				<div className="about-biography">
					<p>Biography</p>
				</div>
				<div className="about-info">
					<p>Skills</p>
					<p>Experience</p>
				</div>
			</div>
		);
	}
}

export default About;