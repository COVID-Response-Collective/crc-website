import React, { Component } from 'react';
import './Header.css';
//import Link from '../link/Link';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">COVID RESPONSE COLLECTIVE</Link>
        <span>
          <Link to="/about">ABOUT</Link>
          <Link to="/connect">CONNECT</Link>
          <Link to="/donate">DONATE</Link>
          <Link to="/help">GET HELP</Link>
          <Link>Español</Link>
        </span>
      </div>  

    );
  }
}

export default Header;
