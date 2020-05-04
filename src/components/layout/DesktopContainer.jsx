import React from 'react'
import { Link } from 'react-router-dom'
import {
    Image,
    Menu,
    Visibility,
    Segment,
    Responsive
} from "semantic-ui-react";
import { getWidth } from '../../utils/layout'
import crc_heart from '../../assets/images/CRC_HEART_RD_T.svg';
import { style } from './styles'

const DesktopContainer = ({ children }) => {
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
          >
            <Segment
              inverted
              textAlign="center"
              vertical
            >
                <Menu
                borderless
                fixed='top'
                style={style.Header}>
                    <Menu.Item as={ Link } to='/' style={style.HeaderText}>
                        <Image size='mini' src={crc_heart} className={style.HeaderHeart}/> COVID RESPONSE COLLECTIVE
                    </Menu.Item>
                    <Menu.Menu size='small' position='right'>
                        <Menu.Item as={ Link } style={style.HeaderText} to='how-to-help'>HOW TO HELP</Menu.Item>
                        <Menu.Item as={ Link } style={style.HeaderText} to='request'>REQUEST HELP</Menu.Item>
                        <Menu.Item as={ Link } style={style.HeaderText} to='about'>ABOUT</Menu.Item>
                        <Menu.Item as={ Link } style={style.HeaderText} to='connect'>CONNECT</Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Segment>
          </Visibility>
          {children}
        </Responsive>
      );
}

export default DesktopContainer