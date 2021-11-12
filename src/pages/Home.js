import React from 'react';
import logo from '../logo.svg';
import "../App.css";
import { Link } from "react-router-dom";


export default function Home () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to='/about'>About</Link>
        </header>
        <div
          id="consent_blackbar"
          style={{ position: "fixed", bottom: 0, zIindex: 100, width: "100%" }}
          class="consent-blackbar"
        ></div>
      </div>
    );
}