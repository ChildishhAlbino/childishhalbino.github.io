import React from 'react'
import Bubble from '../components/bubble'
import NavBar from '../components/NavBar'
import Subble from '../components/subble'
import Link from 'gatsby-link'

const AboutPage = () => (
  <Bubble>
    <NavBar />
    <Subble stylingClass="subble One shadow">
      <div>
        <div class="aboutHeader">
          <img src={require('../images/me.jpg')} alt="me.jpg" />
          <h1 class = "text">
            Hi! I'm Connor Williams, a Sydney based Software Developer.
          </h1>
        </div>
      </div>
    </Subble>
    <Subble stylingClass="subble One shadow">
      <div class="aboutBody">
        <p>I'm a positive, high-energy, polite, and passionate person.</p>
        <br></br>
        <p>
          I've always loved computers - My Dad worked in IT when I was young and
          that definitely had an impact on me. I've been programming since I was
          about 12-13. I learned how to program by building Minecraft mods and
          little python scripts. They weren't anything <i>amazing</i> but they
          laid the groundwork for a love of programming.
        </p>
        <br></br>
        <p>
          I studied IPT in High School (grad. 2017) and graduated from a Diploma
          of Software Development at Mount Druitt TAFE in 2018.
        </p>
        <br></br>
        <p>
          I'm particularly fluent in Java but I also know Python, C#, HTML, CSS,
          JS. I'm really eager to learn more about Software Development and
          passionate about solving problems.
        </p>
        <br></br>
        <p>
          I'm currently looking for full-time work. In the meantime - I've been
          developing some of side projects which you can see <Link to="/projects/">here.</Link>
        </p>
      </div>
    </Subble>
  </Bubble>
)

export default AboutPage
