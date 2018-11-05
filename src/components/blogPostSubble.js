import React from 'react'

import './blogPostSubble.scss'
import Subble from './subble'

const BlogPostSubble = ({ title, caption, postDate, editDate, editPrefix, link }) => {
  if (editDate === postDate) {
    return (
      <Subble stylingClass="subble Two shadow">
        <div class="blogPost">
          <div class="postContent">
            <a href={link}>
              <p>{title}</p>
            </a>
            <p class="captionText">{caption}</p>
          </div>
          <div class="postDate">
            <p>
              Posted: {postDate}
            </p>
          </div>
        </div>
      </Subble>
    )
  } else {
    return (
      <Subble stylingClass="subble Two shadow">
        <div class="blogPost">
          <div class="postContent">
            <a href={link}>
              <p>{title}</p>
            </a>
            <p class="captionText">{caption}</p>
          </div>
          <div class="postDate">
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
