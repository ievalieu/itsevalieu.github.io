import React, { Component } from "react";
import "./About.css";
import evaLieu from "./eva-lieu.jpg";

class About extends Component {
	render() {
		return(
			<div className="about">
				<div className="about-image">
					<img src={evaLieu} alt="Eva Lieu"/>
				</div>
				<div className="about-biography">
					<p>Present: Eva Lieu is a web developer versed in data science and data visualization. She has worked previously worked in at a tech startup called SueYa as a front-end web developer and is currently working at a tea company called Bird Pick Tea & Herb as their General and Operations Manager.</p>
					<p>Past</p>
					<p>Future</p>
					<p>Interests</p>
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