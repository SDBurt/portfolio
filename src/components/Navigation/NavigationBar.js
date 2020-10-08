import React from 'react'
import PropTypes from 'prop-types';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavbarItems from './NavigationItems/NavbarItems';
import classes from './NavigationBar.module.css';

const NavigationBar = props => {
    return (
        <Navbar bg="light" variant="light" expand="sm" className={classes.NavBar}>
            <Navbar.Brand href="/">{props.brand}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <NavbarItems />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


NavigationBar.propTypes = {
    brand: PropTypes.string
}

export default NavigationBar
