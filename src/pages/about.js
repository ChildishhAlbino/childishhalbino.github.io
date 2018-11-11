import React from 'react'
import Bubble from '../components/bubble'
import NavBar from '../components/NavBar'
import Subble from '../components/subble'
import Link from 'gatsby-link'
import style from '../components/subble.module.scss'

const AboutPage = () => (
  <Bubble>
    <NavBar />
    <Subble styling = {[style.One, style.shadow]}>
      <div>
        <div className= {[style.aboutHeader]}>
          <img src={require('../images/me.jpg')} alt="me.jpg" />
          <h1 className = {[style.text]}>
            Hi! I'm Connor Williams, a Sydney based Software Developer.
          </h1>
        </div>
      </div>
    </Subble>
    <Subble styling = {[style.One, style.shadow]}>
      <div className = {style.aboutBody}>
        <p>I'm a positive, high-energy, polite, and passionate person.</p>
        <p>
          I've always loved computers - my Dad worked in IT when I was young and
          that definitely had an impact on me. I've been programming since I was
          about 12-13. I learned how to program by building Minecraft mods and
          little python scripts. They weren't anything <i>amazing</i> but they
          laid the groundwork for a love of programming.
        </p>
        <p>
          I studied IPT in High School (grad. 2017) and graduated from a Diploma
          of Software Development at Mount Druitt TAFE in 2018.
        </p>
        <p>
          I'm particularly fluent in Java but I also know Python, C#, HTML, CSS,
          JS. I'm really eager to learn more about Software Development and
          passionate about solving problems.
        </p>
        <p>
          I'm currently looking for full-time work. In the meantime - I've been
          developing some of side projects which you can see <Link to="/projects/">here.</Link>
        </p>
      </div>
    </Subble>
  </Bubble>
)

export default AboutPage
