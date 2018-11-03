import React from 'react'
import Subble from '../components/subble'
import Link from 'gatsby-link'
import './subble.scss'

const ProjectSubble = ({ children, link, imageSrc }) => (
  <Subble stylingClass="subble One shadow">
    <div class="projectFlex">
      <div class="projectOverlay">
        <Link to={link}>
          <Subble stylingClass="subble Two shadow">
            <img class="projectImage" src={imageSrc} alt="projectImage" />
          </Subble>
          <div class="text">{children}</div>
        </Link>
      </div>
    </div>
  </Subble>
)

export default ProjectSubble
