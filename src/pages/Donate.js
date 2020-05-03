import React from 'react';
import PaymentButton from '../components/PaymentButton';
import './Donate.css';
import crc_heart from '../assets/images/CRC_HEART_RD_T.svg';

function Donate() {
  return (
    <div className="Donate">
      {/*<PaymentButton />*/}
      <img src={crc_heart} className="Donate-logo" alt="logo" />
      <div className="Title">
        DONATE
      </div>
      <div className="Subheader">Let's help each other out to get through these tough times together.</div>
      <hr style={{width: '25%'}}/>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBeYlwN1hApORdNTQCdEY7uCQfHQBEUX3gSXHmfOYCPGwCQQ/viewform?embedded=true" width="640" height="802" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
}

export default Donate;
