import React from 'react'
import Bubble from '../components/bubble'
import NavBar from '../components/NavBar'
import Subble from '../components/subble'
// import Link from 'gatsby-link'
import style from '../components/subble.module.scss'
import IntroSubble from '../components/IntroSubble';
import BioSubble from '../components/bioSubble';

const AboutPage = () => (
  <Bubble>
    <NavBar />
    <IntroSubble></IntroSubble>
    <Subble styling={[style.One, style.shadow]}>
      <div className={style.aboutBody}>
        <Subble styling={[style.Two, style.shadow]}>
          <BioSubble toggle={false} title="More than the tl;dr:">
            <p>Hello</p>
          </BioSubble>
          <BioSubble toggle={false} title="Education:">
            <p>Hello</p>
          </BioSubble>
        </Subble>
      </div>
    </Subble>
  </Bubble>
)

export default AboutPage
