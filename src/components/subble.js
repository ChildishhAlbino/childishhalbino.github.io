import React from 'react'
import './subble.scss'

const Subble = ({ children, stylingClass}) => (
  <div class = {stylingClass}>
    {children}
  </div>
)

export default Subble
