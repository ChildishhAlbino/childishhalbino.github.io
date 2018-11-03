import React from 'react'
import Bubble from '../components/bubble'
import NavBar from '../components/NavBar'
import Subble from '../components/subble'
import IntroSubble from '../components/IntroSubble'
const ContactPage = () => (
  <Bubble>
    <NavBar />
    <Subble stylingClass="subble Two shadow">
      <h1>Contact Me!</h1>
    </Subble>
    <IntroSubble />
  </Bubble>
)

export default ContactPage
