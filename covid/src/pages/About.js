import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About">
      <img className="About-logo" src="crc_logo.png" alt="logo" />
      <div className="About-Big">
        ABOUT
      </div>
      <div className="Hashtag">
        #wereinthistogether
      </div>
      <div className="Subheader">
        Our Mission
      </div>
      <p></p>
      <p></p>
      <div className="Statement" style={{padding: '0 40px'}}>
        COVID Response Collective (CRC) is a group that prizes empathy, 
        fostering community and science literacy during this time of unprecedented crisis. 
        We aim to connect Northwesterners with resources, community and trained professionals 
        despite COVID-19. We are a group of healthcare workers, scientists, programmers, 
        artists and, most importantly, compassionate citizens of Oregon and Washington 
        trying to help each other out in this time. 
      </div>
      <p></p>
      <div className="Statement" >      
        Whether it is finding someone who can 
        pick up medications, looking for reliable information about the virus, news updates, 
        or you just want community, CRC is there to provide it. The one thing we will not 
        provide is panic. We are here to be rational, realistic and supportive. 
      </div>
      <p></p>
      <div className="Statement" >      
        Let’s get through this.
      </div>
    </div>
  );
}

export default About;