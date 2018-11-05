import React from 'react'
import Subble from './subble'
import Link from 'gatsby-link'
import style from './subble.module.scss'

const NavBar = () => (
  <Subble styling={[style.navBar, style.navBarFlex, style.shadow]}>
    <Link to="/">
      <Subble styling={[style.navBarItem, style.shadow]}>Home</Subble>
    </Link>
    <Link to="about/">
      <Subble styling={[style.navBarItem, style.shadow]}>About</Subble>
    </Link>
    <Link to="projects/">
      <Subble styling={[style.navBarItem, style.shadow]}>Projects</Subble>
    </Link>
    <Link to="contact/">
      <Subble styling={[style.navBarItem, style.shadow]}>Contact</Subble>
    </Link>
  </Subble>
)

export default NavBar
