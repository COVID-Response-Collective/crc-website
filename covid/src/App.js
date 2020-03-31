import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Home from 'pages/Home';
import Connect from 'pages/Connect';
import About from 'pages/About';
import Donate from 'pages/Donate';
import Help from 'pages/Help';


function App() {
  return (
    <div>
      <header className="App App-header">
      </header>
      <Router>
        <Header />
        <div>
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
        <Footer />
      </Router>
    </div>
  )
}

export default App;
