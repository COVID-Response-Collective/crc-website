import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Image,
    Container,
    Menu,
    Visibility,
    Segment,
    Responsive
} from "semantic-ui-react";
import { getWidth } from '../../utils/layout'
import crc_heart from '../../assets/images/CRC_HEART_RD_T.svg';

class DesktopContainer extends Component {
    state = {};
  
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });
  
    render() {
      const { children } = this.props;
      const { fixed } = this.state;
  
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign="center"
              vertical
            >
              <Menu
                fixed={fixed ? "top" : null}
                inverted
                pointing={!fixed}
                secondary={!fixed}
                size="mini"
              >
                <Container>
                <Menu
                inverted
                stackable
                size='mini'
                compact
                borderless
                fixed={'top'}>
                    <Menu.Item as={ Link } to='/'>
                        <Image size='mini' src={crc_heart} /> COVID RESPONSE COLLECTIVE
                    </Menu.Item>
                    <Menu.Menu size='small' position='right'>
                        <Menu.Item as={ Link } to='how-to-help'>Donate</Menu.Item>
                        <Menu.Item as={ Link } to='request'>Request Help</Menu.Item>
                        <Menu.Item as={ Link } to='about'>About</Menu.Item>
                        <Menu.Item as={ Link } to='connect'>Connect</Menu.Item>
                    </Menu.Menu>
                </Menu>
                </Container>
              </Menu>
            </Segment>
          </Visibility>
          {children}
        </Responsive>
      );
    }
}

export default DesktopContainer