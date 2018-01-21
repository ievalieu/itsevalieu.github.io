import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import './App.css';
import About from "../children/About.js";
import Portfolio from "../children/Portfolio.js";
import Contact from "../children/Contact.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutClicked: false,
      portfolioClicked: false,
      contactClicked: false
    };
    this.showAbout = this.showAbout.bind(this);
    this.showPortfolio = this.showPortfolio.bind(this);
    this.showContact = this.showContact.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  render() {
    const aboutClicked = this.state.aboutClicked;
    const portfolioClicked = this.state.portfolioClicked;
    const contactClicked = this.state.contactClicked;
    
    let renderThis = null;
    
    if (aboutClicked) {
      renderThis = <About/>;
    } else if (portfolioClicked) {
      renderThis = <Portfolio/>;
    } else if (contactClicked) {
      renderThis = <Contact/>;
    }
    return (
      <div className="Folder">
      <div className="App" id="turn">
        <div className="App-header">
          <button className="btn" label="tab" id="about-tab" onClick={ this.onClick }>ABOUT ME</button>
          <button className="btn" label="tab" id="portfolio-tab" onClick={ this.onClick }>PORTFOLIO</button>
          <button className="btn" label="tab" id="contact-tab" onClick={ this.onClick }>CONTACT ME</button>
        </div>
        <div className="App-body">
          { renderThis }
        </div>
      </div>
      </div>
    );
  }
  showAbout() {
    console.log("About clicked");
    this.setState({
      aboutClicked: true,
      portfolioClicked: false, 
      contactClicked: false
    }); 
  }
  showPortfolio() {
    console.log("Portfolio clicked");
    this.setState({
      aboutClicked: false,
      portfolioClicked: true, 
      contactClicked: false
    });      
  }
  showContact() {
    console.log("Contact clicked"); 
    this.setState({
      aboutClicked: false,
      portfolioClicked: false, 
      contactClicked: true
    }); 
  } 
  buttonClick() {
    console.log("A button was clicked!");
    document.getElementById("turn").style.transform = "rotate(90deg)";
  }
  onClick(e) {
    this.showAbout();
    this.buttonClick();
  }
}

export default App;
/*function for animation:
folder rotate
  -rotate(90deg)
folder/page flip/unflip
  -need booleans (which tab clicked?/page clicked?)
  -transform-origin: left center
  -rotateY(-180)
  -perspective? 1000
  -translate 2s

*/