import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
        <img src="crc_logo.png" className="App-logo" alt="logo" />
        <div className="Hashtag">
          <b>
            #wereinthistogether
          </b>
        </div>
        <div className="Subheader">
          Serving the beautiful Pacific Northwest, USA.
        </div>
        <div className="Statement" style={{paddingTop: '2em', width: '800px', textAlign: 'center'}}>      
        The CRC is a community movement for real conversation, scientific information, 
        and local resource exchange. We prize empathy and tangible actions in a time of 
        isolation and uncertainty as of a result of the COVID-19 pandemic.
        </div>
        <div className="Statement" style={{paddingTop: '1em', width: '800px', textAlign: 'center'}}>      
        We are Pacific Northwesterners, neighbors, families, healthcare workers, scientists, programmers, artists, and others helping one another.
        </div>
        <div className="Subheader">
          <b>
          Let's get through this, together.
          </b>
        </div>
    </div>
  );
}

export default Home;