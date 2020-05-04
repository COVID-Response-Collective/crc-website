import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Image,
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
} from "semantic-ui-react";
import { getWidth } from '../../utils/layout'
import crc_heart from '../../assets/images/CRC_HEART_RD_T.svg';

class MobileContainer extends Component {
    state = {};

    handleSidebarHide = () => this.setState({ sidebarOpened: false });

    handleToggle = () => this.setState({ sidebarOpened: true });

    render() {
        const { children } = this.props;
        const { sidebarOpened } = this.state;

        return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <Sidebar
            as={Menu}
            animation="push"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            >
                <Menu.Item as={ Link } to='how-to-help'>Donate</Menu.Item>
                <Menu.Item as={ Link } to='request'>Request Help</Menu.Item>
                <Menu.Item as={ Link } to='about'>About</Menu.Item>
                <Menu.Item as={ Link } to='connect'>Connect</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                    inverted
                    textAlign="center"
                    vertical
                    style={{ minHeight: 80, padding: "1em 0em" }}
                >
                <Container>
                <Menu fixed='top' inverted pointing secondary size="large">
                    <Menu.Item onClick={this.handleToggle}>
                        <Icon name="sidebar" />
                    </Menu.Item>
                    <Menu.Item position="right" as={ Link } to='/'>
                        <Image size='mini' src={crc_heart} /> COVID RESPONSE COLLECTIVE
                    </Menu.Item>
                </Menu>
                </Container>
            </Segment>

            {children}
            </Sidebar.Pusher>
        </Responsive>
        );
    }
}

export default MobileContainer