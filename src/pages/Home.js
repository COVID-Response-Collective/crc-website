import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import crc_logo from '../assets/images/COVIDRC_SEAL_RD_WT.svg';

import { Header, Icon, Image, Container } from 'semantic-ui-react'

const style = {
  text: {
    font: 'bold 3em Roboto'
  },
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};

function Home() {
  return (
    <div className="Home">
      <Image src={crc_logo} size="medium" className="App-logo" alt="logo" />
      <Header
        as="div"
        content="COVID Response Collective"
        style={style.text}
        textAlign="center"
      />
      <div className="Hashtag">
        #weareinthistogether
        </div>
      <div className="Subheader" style={{ paddingTop: '1em', textAlign: 'center' }}>
        Serving the beautiful Pacific Northwest, USA.
        </div>
      <div className="Statement" style={{ paddingTop: '2em', textAlign: 'center' }}>
        The CRC is a community movement for real conversation, scientific information,
        and local resource exchange. We prize empathy and tangible actions in a time of
        isolation and uncertainty as of a result of the COVID-19 pandemic.
        </div>
      <div className="Statement" style={{ paddingTop: '1em', textAlign: 'center' }}>
        We are Pacific Northwesterners, neighbors, families, healthcare workers, scientists, programmers, artists, and others helping one another.
        </div>
      <div className="Hashtag" style={{ paddingTop: '1em', textAlign: 'center' }}>
        Let's get through this, together.
        </div>
      <Link to='/connect' style={{ color: 'white' }}>
        <div className="ActionBtn">
          Connect with Us
          </div>
      </Link>
    </div>
  );
}

export default Home;
