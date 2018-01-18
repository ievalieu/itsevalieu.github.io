import React, { PropTypes, Component } from 'react';
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
      <div className="App">
        <div className="App-header">
          <button label="tab" id="about-tab" onClick={ this.showAbout }>ABOUT ME</button>
          <button label="tab" id="portfolio-tab" onClick={ this.showPortfolio }>PORTFOLIO</button>
          <button label="tab" id="contact-tab" onClick={ this.showContact }>CONTACT ME</button>
        </div>
        <div className="App-body">
          { renderThis }
        </div>
      </div>
    );
  }
  showAbout(e) {
    console.log("About clicked");
    this.setState({
      aboutClicked: true,
      portfolioClicked: false, 
      contactClicked: false
    }); 
  }
  showPortfolio(e) {
    console.log("Portfolio clicked");
    this.setState({
      aboutClicked: false,
      portfolioClicked: true, 
      contactClicked: false
    });      
  }
  showContact(e) {
    console.log("Contact clicked"); 
    this.setState({
      aboutClicked: false,
      portfolioClicked: false, 
      contactClicked: true
    }); 
  } 
}

export default App;
