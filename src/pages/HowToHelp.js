import React from 'react';
import PaymentButton from '../components/PaymentButton';
import './HowToHelp.css';
import crc_heart from '../assets/images/CRC_HEART_RD_T.svg';

function Donate() {
  return (
    <div className="HowToHelp">
      {/*<PaymentButton />*/}
      <img src={crc_heart} className="HowToHelp-logo" alt="logo" />
      <div className="Title">
        HOW TO HELP
      </div>
      <div className="Subheader">Let's help each other out to get through these tough times together.</div>
      <hr style={{ width: '25%' }} />
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBeYlwN1hApORdNTQCdEY7uCQfHQBEUX3gSXHmfOYCPGwCQQ/viewform?embedded=true" width='100%' height="802" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
    </div>
  );
}

export default Donate;
