import React from 'react'
import { Browser } from 'react-kawaii'
import { Container } from 'semantic-ui-react'
import './NotFound.css'

const NotFound = () => (
    <Container>
        <div className='Notfound'>
            <h1 style={{ font: 'large Roboto' }}>Page Not Found</h1>
            <Browser size={200} mood="shocked" color="#b20f29" />
        </div>
    </Container>
)

export default NotFound