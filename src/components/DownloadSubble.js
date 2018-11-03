import React from 'react'
import Subble from '../components/subble'
import './downloadSubble.scss'
const TallyTabPage = ({ children, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <Subble stylingClass="subble shadow download">{children}</Subble>
  </a>
)

export default TallyTabPage
