import React from 'react';
import './Request.css';
import { Container, Segment, Responsive } from 'semantic-ui-react'
import { getWidth } from '../utils/layout'
import crc_heart from '../assets/images/CRC_HEART_RD_T.svg'

// components
import RequestForm from '../components/RequestForm';

function Request() {
  return (
    <div>
      <Container textAlign='center'>
        <img src={crc_heart} className="Request-logo" alt="logo" />
        <div className="Title">
          REQUEST HELP
      </div>
        <div className="Subheader">Need help during these times? Let us know how we can help you!</div>
        <hr style={{ width: '25%' }} />
        {/*<RequestForm />*/}

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfDSwYQe4bbMCNhAUrG5BHaeaw-aky5AVAMTUgUAefzsxOmag/viewform?embedded=true" width={getWidth} height="1002" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>

      </Container>
    </div>
  );
}

export default Request;
