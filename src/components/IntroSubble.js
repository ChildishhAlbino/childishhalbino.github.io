import React from 'react'
import {Link} from 'gatsby'
import './introSubble.scss'
import Subble from './subble'
import headerPhoto from '../images/me.jpg'
import style from './subble.module.scss'

const IntroSubble = () => (
  <Subble styling = {[style.One, style.shadow,]}>
    <div>
      <div className="introHeader">
        <h1>
          Hi! I'm <i>Connor Williams.</i>
        </h1>
      </div>
      <div className="introBlurb">
        <img src = {headerPhoto} alt="me.jpg" />
        <div className="blurbText">
          <p>
            I'm a Software Developer from Sydney who recently graduated with a
            Diploma of Software Development. This is a personal blog for me to learn
            web development and showcase my <Link to="/projects/">projects.</Link>
          </p>
          <p>
            <br />
            Feel free to learn some more about me <Link to="/about/">here!</Link>
          </p>
        </div>
      </div>
    </div>
  </Subble>
)

export default IntroSubble
