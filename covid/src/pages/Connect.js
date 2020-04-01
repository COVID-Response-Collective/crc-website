import React from 'react';
import './Connect.css';

// components
import ContactForm from '../components/ContactForm'

function Connect() {
  return (
    <div className="Connect-body">
      <img src="crc_logo.png" className="App-logo" alt="logo" />
      <div style={{ paddingLeft: '80px', paddingRight: '80px', textAlign: 'center' }}>
        <ContactForm />
      </div>
    </div>
  );
}

export default Connect;