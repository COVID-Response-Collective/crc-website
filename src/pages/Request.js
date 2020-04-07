import React from 'react';
import './Request.css';
import crc_heart from '../assets/images/CRC_HEART_RD_T.svg';

// components
import RequestForm from '../components/RequestForm';

function Request() {
  return (
    <div className="Request">
      <img src={crc_heart} className="Request-logo" alt="logo" />
      <div className="Title">
        REQUEST HELP
      </div>
      <div className="Subheader">Need help during these times? Let us know how we can help you!</div>
      <hr style={{width: '25%'}}/>
      <RequestForm />
    </div>
  );
}

export default Request;
