import React from 'react'
import Bubble from '../components/bubble'
import NavBar from '../components/NavBar'
import Subble from '../components/subble'
import IntroSubble from '../components/IntroSubble'
import ProjectSubble from '../components/projectSubble'

const Projects = () => (
  <Bubble>
    <NavBar />
    <ProjectSubble link="/TallyTab/" imageSrc = "https://i.imgur.com/AC5Jsnl.png">
      <h1>TallyTab</h1>
      <p>A tallying system that helps bartenders keep track of things.</p>
      <i>Never lose track of your bar tabs again!</i>
    </ProjectSubble>
    <IntroSubble />
  </Bubble>
)

export default Projects
