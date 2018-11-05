import React from 'react'
import style from './subble.module.scss'

const Subble = ({ children, styling}) => {

  let classNames = [style.subble].concat(styling);
  return(
      <div className = {classNames.join(' ')}>
        {children}
      </div>    
  )
}
export default Subble
