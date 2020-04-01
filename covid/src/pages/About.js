import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import crc_heart from '../assets/images/CRC_HEART_RD_T.svg';

function About() {
  return (
    <div className="About">
      <img className="About-logo" src={crc_heart} alt="logo" />
      <div className="Title">
        ABOUT US
      </div>
      <div className="Hashtag">
        <b>#wereinthistogether</b>
      </div>
      <div>
        <div className="Subheader" style={{paddingTop: '3em', paddingBottom: '1em'}}>
          Our Mission
        </div>
        <p className="Statement" style={{textAlign: 'center'}}>
          COVID Response Collective (CRC) is a group that prizes empathy, fostering community and science literacy during this time of unprecedented crisis. We aim to connect Northwesterners with resources, community and trained professionals despite COVID-19. We are a group of healthcare workers, scientists, programmers, artists and, most importantly, compassionate citizens of Oregon and Washington trying to help each other out in this time.
        </p>
        <p className="Statement">
          Whether it is finding someone who can pick up medications, looking for reliable information about the virus, news updates, or you just want community, CRC is there to provide it. The one thing we will not provide is panic. We are here to be rational, realistic and supportive.
        </p>
        <p className="Statement">
          Let’s get through this.
        </p>
      </div>
      <div>
        <div className="Subheader" style={{paddingTop: '3em', paddingBottom: '1em'}}>
          Our Values
        </div>
        <p className="Statement" style={{textAlign: 'center'}}>
          <b>Empathy</b><br/>
          Celebrating humanity despite crisis.
        </p>
        <p className="Statement" style={{textAlign: 'center'}}>
          <b>Community</b><br/>
          Crafting ways to socialize while practicing social distancing.
        </p>
        <p className="Statement" style={{textAlign: 'center'}}>
          <b>Science Literacy</b><br/>
          Communicating science-based information about the COVID-19 pandemic in accessible ways.
        </p>
        <p className="Statement" style={{textAlign: 'center'}}>
          <b>Resourcefulness</b><br/>
          Connecting supplies and skills to folks in need.
        </p>
      </div>
      <Link to='/connect' style={{color: 'white'}}>
        <div className="ActionBtn">
          Connect with Us
        </div>
      </Link>
    </div>
  );
}

export default About;
