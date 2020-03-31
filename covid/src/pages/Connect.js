import React from 'react';
import './Connect.css';

// components
import ContactForm from '../components/ContactForm'

function Connect() {
  return (
    <div class="Connect-body">
        <img src="crc_logo.png" className="App-logo" alt="logo" />
        <div style={{ paddingLeft: '80px', paddingRight: '80px', textAlign: 'center' }}>
          <ContactForm />
        </div>
        <div style={{paddingTop: '30px'}}>
          <a
            className="App-link"
            href="https://discord.gg/A4XqWGA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join The Discord
          </a>
        </div>
        <div style={{paddingTop: '50px', paddingBottom: '50px'}}>
          <a
            className="App-link"
            href="mailto:crc@gmail.com?Subject=Hello%20I'd%20like%20to%20help"
            target="_top"
          >
            Email Us
          </a>
        </div>
    </div>
  );
}

export default Connect;