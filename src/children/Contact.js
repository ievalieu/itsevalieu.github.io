import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "",
			body: ""
		};
		this.handleTab = this.handleTab.bind(this);
   	 	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
    	this.setState = {
     		name: e.target.value,
     		email: e.target.value,
     		subject: e.target.value,
     		body: e.target.value
    	};
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.tabClicked);
	}

	render() {
		return(
			<div className="contact">
				<p>Contact Me</p>
				<form onSubmit={ this.handleSubmit }>
					<input type="text" placeholder="Full Name" value={this.state.name} onChange={this.handleChange}></input>
					<input type="text" placeholder="Email Address"  value={this.state.email} onChange={this.handleChange}></input>
					<input type="text" placeholder="Subject Line"  value={this.state.subject} onChange={this.handleChange}></input>
					<textarea type="text" placeholder="Message"  value={this.state.body} onChange={this.handleChange}></textarea>
				</form>
			</div>
		);
	}
}

export default Contact;
    
  
  // render() {
  //   return (
  //     <div className="folder">
  //       <div className="folder-header">
  //         <form onSubmit={this.handleSubmit}> {buttons should handle onclick to pass state.value to function that renders page content}
  //           <button name="tab" type="submit" value={this.state.onClick={this.handleChange}>About</button>
  //         </form> 