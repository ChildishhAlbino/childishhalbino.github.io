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
            <ul>
              <li>Diploma of Software Development <i>(completed, June 2018)</i></li>
              <li>Higher School Certificate - Greystanes High School <i>(graduated, 2017)</i>
              </li>
              <ul>
                <li>Band 5 in Hospitality</li>
                <li>Band 4 in Physics</li>
                <li>Band 4 in English</li>
                <li>Band 4 in IPT</li>
              </ul>
              <li>Certificate II in Hospitality <i>(SIT20213)</i></li>
            </ul>
          </BioSubble>
        </Subble>
      </div>
    </Subble>
  </Bubble>
)

export default AboutPage
