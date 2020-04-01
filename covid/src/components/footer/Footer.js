import React, { Component } from 'react';
import './Footer.css';
import facebook_logo from '../../assets/images/f_logo_RGB-Blue_1024.png';

//import Link from '../link/Link';
//import { Link } from 'react-router-dom';
//import crc_heart from '../../assets/images/CRC_HEART_RD_T.svg';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <a
           className="App-link"
           href="https://discord.gg/A4XqWGA"
           target="_blank"
           rel="noopener noreferrer"
        >
           Join The Discord
        </a>
        <a href="https://www.facebook.com/COVIDResponseCollective/">
          <img src={facebook_logo} alt="Footer Facebook logo" className="Footer-Social"/>
          {/*<img src={instagram_logo} className="Footer-Social" alt="Footer Instagram logo" />*/}
        </a>
        <a
            className="App-link"
            href="mailto:crc@gmail.com?Subject=Hello%20I'd%20like%20to%20help"
            target="_top"
        >
            Email Us
        </a>
      </div>

    );
  }
}

export default Footer;