import React, { Component } from 'react';
import axios from 'axios';
import Logo from './logo.js';
import Dog from './750814.jpg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }





  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logo">
            <img src={Dog} />
          </div>
          <h1>Shelfie</h1>
        </div>
        <br/>
        <div className="body">
          <div id="box">
            <div>one</div>
          </div>
          <br/>
          <div id="box">
            <div>two</div>
          </div>
          <br/>
          <div id="box">
            <div>three</div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
