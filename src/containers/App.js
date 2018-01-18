import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <button label="tab" id="about-tab">ABOUT ME</button>
          <button label="tab">PORTFOLIO</button>
          <button label="tab">CONTACT ME</button>
        </div>
      </div>
    );
  }
}

export default App;
