import React from 'react'
import Subble from '../components/subble'
import {Link} from 'gatsby'
import './subble.module.scss'
import style from './subble.module.scss'

const ProjectSubble = ({ children, link, imageSrc }) => (
  <Subble styling = {[style.One, style.shadow]}>
    <div className={style.projectFlex}>
      <div className={style.projectOverlay}>
        <Link to={link}>
          <Subble styling = {[style.Two, style.shadow]}>
            <img className={style.projectImage} src={imageSrc} alt="projectImage" />
          </Subble>
          <div className={style.text}>{children}</div>
        </Link>
      </div>
    </div>
  </Subble>
)

export default ProjectSubble
