import React from 'react'
import DesktopContainer from './DesktopContainer'
import MobileContainer from './MobileContainer'

const ResponsiveContainer = ({ children }) => (
    <>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </>
);

export default ResponsiveContainer