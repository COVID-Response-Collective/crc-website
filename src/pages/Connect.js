import React from 'react';
import './Connect.css';
import crc_heart from '../assets/images/CRC_HEART_RD_T.svg';
import discord_logo from '../assets/images/Discord-Logo_Wordmark-Color.svg';
import facebook_logo from '../assets/images/f_logo_RGB-Blue_1024.png';

// components
import ContactForm from '../components/ContactForm'

function Connect() {
  return (
    <div className="Connect">
        <img src={crc_heart} className="Connect-logo" alt="logo" />
        <div className="Title">
          CONNECT
        </div>
        <div className="Subheader">We believe in community.</div>
        <hr style={{width: '25%'}}/>
        <div>
          <img src={discord_logo} className="Social-logo" alt="Discord logo" />
          <div className="Subheader">Join our team on Discord.</div>
          <a href="https://discord.gg/A4XqWGA"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'white'}}>
            <div className="ActionBtn">
              Join
            </div>
          </a>
        </div>
        <hr style={{width: '25%'}}/>
        <div>
          <img src={facebook_logo} className="Social-logo" alt="Facebook logo" />
          <div className="Subheader" style={{paddingTop: '1em'}}>Get involved in our Facebook group.</div>
          <a href="https://www.facebook.com/COVIDResponseCollective/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'white'}}>
            <div className="ActionBtn">
              Check Us Out
            </div>
          </a>
        </div>
        <hr style={{width: '25%'}}/>
        <div>
          <div className="Hashtag" style={{paddingTop: '1em'}}>Contact Us</div>
          <a href="mailto:crcpnw@gmail.com"
            target="_top"
            rel="noopener noreferrer"
            style={{color: 'white'}}>
            <div className="ActionBtn">
              Email Us
            </div>
          </a>
        </div>
    </div>
  );
}

export default Connect;
