import React, { Component } from 'react';
import './Header.css';
//import Link from '../link/Link';
import { Link } from 'react-router-dom';
import crc_heart from '../../assets/images/CRC_HEART_RD_T.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <span className="HeaderLeft">
          <Link to="/" style={{textDecoration: 'none'}}>
            <img src={crc_heart} className="HeaderHeart" alt="heart" />
            COVID RESPONSE COLLECTIVE
          </Link>
        </span>
        <span className="HeaderRight">
          <Link to="/request" style={{textDecoration: 'none'}}>REQUEST</Link>
          <Link to="/about" style={{paddingLeft: '1em', textDecoration: 'none'}}>ABOUT</Link>
          {/*<Link to="/stats" style={{paddingLeft: '1em', textDecoration: 'none'}}>STATS</Link>*/}
          <Link to="/connect" style={{paddingLeft: '1em', textDecoration: 'none'}}>CONNECT</Link>
          {/* <Link to="/donate">DONATE</Link>
          <Link to="/help">GET HELP</Link>
          <Link>Español</Link> */}
        </span>
      </div>

    );
  }
}

export default Header;
