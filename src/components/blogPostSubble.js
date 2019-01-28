import React from 'react'
import { Link } from 'gatsby'
import Subble from './subble'
import style from './subble.module.scss'

const BlogPostSubble = ({ title, caption, postDate, editDate, editPrefix, link }) => {
  if (editDate === postDate) {
    return (
      <Subble styling={[style.Two, style.shadow]}>
        <div className="blogPost">
          <div className="postContent">
            <Link to={link}>
              <p>{title}</p>
            </Link>
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
      <Subble styling={[style.Two, style.shadow]}>
        <div className = {style.blogPostSubble}>
          <div>
            <Link to={link}>
              <h1>{title}</h1>
            </Link>
            <p>{caption}</p>
          </div>
          <div>
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
