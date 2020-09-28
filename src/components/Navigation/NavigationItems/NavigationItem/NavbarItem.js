import React from 'react'
import PropTypes from 'prop-types'

import Nav from 'react-bootstrap/Nav';

const NavbarItem = props => {
    return (
        <Nav.Link href={props.link}>{props.children}</Nav.Link>
    )
}

NavbarItem.propTypes = {
    exact: PropTypes.bool,
    link: PropTypes.string,
    active: PropTypes.bool
}

export default NavbarItem
