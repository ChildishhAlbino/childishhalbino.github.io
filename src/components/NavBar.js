import React from 'react'
import Subble from './subble'
import Link from 'gatsby-link'
import './subble.scss'

const NavBar = () => (
  <Subble stylingClass="subble navBar shadow navBarFlex">
    <Link to="/">
      <Subble stylingClass="subble navBarItem shadow">Home</Subble>
    </Link>
    <Link to="about/">
      <Subble stylingClass="subble navBarItem shadow">About</Subble>
    </Link>
    <Link to="projects/">
      <Subble stylingClass="subble navBarItem shadow">Projects</Subble>
    </Link>
    <Link to="contact/">
      <Subble stylingClass="subble navBarItem shadow">Contact</Subble>
    </Link>
  </Subble>
)

export default NavBar
