import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
    Image,
    Icon,
    Menu,
    Responsive,
    Sidebar,
} from "semantic-ui-react";
import { getWidth } from '../../utils/layout'
import crc_heart from '../../assets/images/CRC_HEART_RD_T.svg';
import { style } from './styles'

const MobileContainer = ({ children }) => {
    const [sidebarOpened, setSidebarOpened] = useState(false)
    const history = useHistory()

    const handleLinkClick = (redirect) => {
        history.push(redirect)
        setSidebarOpened(sidebarOpened => !sidebarOpened)
    }

    return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}>
            <Sidebar
            as={Menu}
            animation="push"
            vertical
            visible={sidebarOpened}
            style={{ font: 'bold medium Roboto' }}
            >
                <Menu.Item as={ Link } style={style.HeaderText} onClick={() => handleLinkClick('/')}>HOME</Menu.Item>
                <Menu.Item as={ Link } style={style.HeaderText} onClick={() => handleLinkClick('/donate')}>DONATE</Menu.Item>
                <Menu.Item as={ Link } style={style.HeaderText} onClick={() => handleLinkClick('/volunteer')}>VOLUNTEER</Menu.Item>
                <Menu.Item as={ Link } style={style.HeaderText} onClick={() => handleLinkClick('/request')}>REQUEST HELP</Menu.Item>
                <Menu.Item as={ Link } style={style.HeaderText} onClick={() => handleLinkClick('/about')}>ABOUT</Menu.Item>
                <Menu.Item as={ Link } style={style.HeaderText} onClick={() => handleLinkClick('/connect')}>CONNECT</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Menu fixed='top' pointing secondary size="large" style={{ font: 'medium Roboto' }}>
                    <Menu.Item onClick={() => setSidebarOpened(sidebarOpened => !sidebarOpened)}>
                        <Icon size='large' name="sidebar" />
                    </Menu.Item>
                    <Menu.Item position="right" style={style.HeaderText} as={ Link } to='/'>
                        <Image size='mini' rounded src={crc_heart} /> COVID RESPONSE COLLECTIVE
                    </Menu.Item>
                </Menu>
            {children}
            </Sidebar.Pusher>
        </Responsive>
    );
}

export default MobileContainer
