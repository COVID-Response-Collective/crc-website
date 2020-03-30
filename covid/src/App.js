import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Header from 'components/header/Header';
import Home from 'pages/Home';
import Connect from 'pages/Connect';
import About from 'pages/About';
import Donate from 'pages/Donate';
import Help from 'pages/Help';

// components
import PaymentButton from './components/PaymentButton'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div>
      <header className="App App-header">
        <img src="crc_logo.png" className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://discord.gg/A4XqWGA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join The Discord
        </a>
        <a
          className="App-link"
          href="mailto:crc@gmail.com?Subject=Hello%20I'd%20like%20to%20help"
          target="_top"
        >
          Email Us
        </a>
      </header>
      <div style={{ paddingLeft: '80px', paddingRight: '50px' }}>
        <ContactForm />
        <PaymentButton />
      </div>
    {/*<Router>
        <Header />
        <div className="App-body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/connect">
              <Connect />
            </Route>
            <Route path="/donate">
              <Donate />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
          </Switch>
        </div>
      </Router>*/}
    </div>
  )
}

export default App;