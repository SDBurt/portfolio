import React from 'react'

import NavigationBar from '../../components/Navigation/NavigationBar';
import Container from 'react-bootstrap/Container';
const Layout = (props) => {
    return (
        <React.Fragment>
            <NavigationBar brand="SDBurt" />
            <Container>
                {props.children}
            </Container>
        </React.Fragment>


    )
}

export default Layout
