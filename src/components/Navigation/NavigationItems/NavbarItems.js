import React from 'react'

import NavbarItem from './NavigationItem/NavbarItem';

function NavbarItems() {
    return (
        <React.Fragment>
            <NavbarItem exact link="/">Home</NavbarItem>
            <NavbarItem link="/projects">Projects</NavbarItem>
            <NavbarItem link="/blog">Blog</NavbarItem>
            <NavbarItem link="/about">About</NavbarItem>
        </React.Fragment>
    )
}

export default NavbarItems
