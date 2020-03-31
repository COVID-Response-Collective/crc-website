import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Home.css';
import crc_logo from '../assets/images/CRC_SEAL_RD_WT.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="Home">
        <img src={crc_logo} className="App-logo" alt="logo" />
        <div className="Title">
          COVID Response Collective
        </div>
        <div className="Hashtag">
          #wereinthistogether
        </div>
        <div className="Subheader" style={{paddingTop: '1em'}}>
          Serving the beautiful Pacific Northwest, USA.
        </div>
        <div className="Statement" style={{paddingTop: '2em', textAlign: 'center'}}>
          The CRC is a community movement for real conversation, scientific information,
          and local resource exchange. We prize empathy and tangible actions in a time of
          isolation and uncertainty as of a result of the COVID-19 pandemic.
        </div>
        <div className="Statement" style={{paddingTop: '1em', textAlign: 'center'}}>
          We are Pacific Northwesterners, neighbors, families, healthcare workers, scientists, programmers, artists, and others helping one another.
        </div>
        <div className="Hashtag" style={{paddingTop: '1em'}}>
          Let's get through this, together.
        </div>
        <Link to='/connect' style={{color: 'white'}}>
          <div className="ActionBtn">
            Connect with Us
          </div>
        </Link>
    </div>
  );
}

export default Home;
