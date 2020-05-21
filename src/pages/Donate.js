import React from 'react';
import './Donate.css';
import crc_heart from '../assets/images/CRC_HEART_RD_T.svg';

const Donate = () => (
  <div className="Donate">
    {/*<PaymentButton />*/}
    <img src={crc_heart} className="Donate-logo" alt="logo" />
    <div className="Title">
      DONATE
      </div>
    <div className="Subheader">Every contribution counts.</div>
    <hr style={{ width: '25%' }} />
    <iframe src="https://docs.google.com/forms/d/1wjd2_c3geTnaUb7aUrClqwjMFAgZpuqV4osWI-IQhuY/viewform" width='100%' height="802" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
  </div>
);

export default Donate;
