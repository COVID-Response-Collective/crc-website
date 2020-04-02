import React, { Component } from 'react';
import './Footer.css';
import facebook_logo from '../../assets/images/f_logo_RGB-Blue_1024.png';
import discord_logo from '../../assets/images/Discord-Logo-White.svg';
import FA from 'react-fontawesome';

//import Link from '../link/Link';
//import { Link } from 'react-router-dom';
//import crc_heart from '../../assets/images/CRC_HEART_RD_T.svg';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <a
          href="https://discord.gg/A4XqWGA"
          target="_blank"
          rel="noopener noreferrer"
          className="FooterBtn"
          style={{backgroundColor: '#7289DA'}}>
          <img className="Footer-Discord" src={discord_logo} alt="Footer Discord logo" />
          <FA name="discord" style={{backgroundColor: 'white'}}/>
        </a>
        <a className="FooterBtn" href="https://www.facebook.com/COVIDResponseCollective/">
          <img className="Footer-Social" src={facebook_logo} alt="Footer Facebook logo"  />
          {/*<img src={instagram_logo} className="Footer-Social" alt="Footer Instagram logo" />*/}
        </a>
        <a className="FooterBtn"
          href="https://www.instagram.com/covidresponsecollective/"
          target="_top"
          style={{backgroundColor: '#CCCCCC', color: 'black'}}>
          <FA name="instagram fa-lg" className="Footer-Instagram"/>
        </a>
        <a className="FooterBtn"
          href="mailto:crcpnw@gmail.com"
          target="_top"
          style={{backgroundColor: '#0077FF', color: 'white'}}>
          <FA name="envelope" className="Footer-Mail"/>
        </a>
      </div>
    );
  }
}

export default Footer;
