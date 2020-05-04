import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Image,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
} from "semantic-ui-react";
import { getWidth } from '../../utils/layout'
import crc_heart from '../../assets/images/CRC_HEART_RD_T.svg';

const MobileContainer = ({ children }) => {
    const [sidebarOpened, setSidebarOpened] = useState(false)
        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar
                as={Menu}
                animation="push"
                onHide={() => setSidebarOpened(sidebarOpened => !sidebarOpened)}
                vertical
                visible={sidebarOpened}
                style={{ font: 'medium Roboto' }}
                >
                    <Menu.Item as={ Link } to='how-to-help'>Donate</Menu.Item>
                    <Menu.Item as={ Link } to='request'>Request Help</Menu.Item>
                    <Menu.Item as={ Link } to='about'>About</Menu.Item>
                    <Menu.Item as={ Link } to='connect'>Connect</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        textAlign="center"
                        vertical
                        style={{ minHeight: 80, padding: "1em 0em" }}
                    >
                    <Menu fixed='top' pointing secondary size="large" style={{ font: 'medium Roboto' }}>
                        <Menu.Item onClick={() => setSidebarOpened(sidebarOpened => !sidebarOpened)}>
                            <Icon name="sidebar" />
                        </Menu.Item>
                        <Menu.Item position="right" as={ Link } to='/'>
                            <Image size='mini' src={crc_heart} /> COVID RESPONSE COLLECTIVE
                        </Menu.Item>
                    </Menu>
                </Segment>
                {children}
                </Sidebar.Pusher>
            </Responsive>
        );
}

export default MobileContainer