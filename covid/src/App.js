import React from 'react';
import './App.css';

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
    </div>
  );
}

export default App;