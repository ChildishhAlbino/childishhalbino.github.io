import React from 'react'

import './blogPostSubble.scss'
import Subble from './subble'
import style from './subble.module.scss'

const BlogPostSubble = ({ title, caption, postDate, editDate, editPrefix, link }) => {
  if (editDate === postDate) {
    return (
      <Subble styling = {[style.Two, style.shadow]}>
        <div className="blogPost">
          <div className="postContent">
            <a href={link}>
              <p>{title}</p>
            </a>
            <p className="captionText">{caption}</p>
          </div>
          <div className="postDate">
            <p>
              Posted: {postDate}
            </p>
          </div>
        </div>
      </Subble>
    )
  } else {
    return (
      <Subble styling = {[style.Two, style.shadow]}>
        <div className ="blogPost">
          <div className = "postContent">
            <a href={link}>
              <p>{title}</p>
            </a>
            <p className = "captionText">{caption}</p>
          </div>
          <div className = "postDate">
            <p>
              {editPrefix} {editDate}
            </p>
          </div>
        </div>
      </Subble>
    )
  }
}

export default BlogPostSubble
