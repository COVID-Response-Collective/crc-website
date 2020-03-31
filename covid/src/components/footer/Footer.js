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
        <a href="https://www.facebook.com/COVIDResponseCollective/">
          <img src={facebook_logo} alt="Footer Facebook logo" className="Footer-Social"/>
          {/*<img src={instagram_logo} className="Footer-Social" alt="Footer Instagram logo" />*/}
        </a>
      </div>

    );
  }
}

export default Footer;
