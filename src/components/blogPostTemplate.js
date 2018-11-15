import React from 'react'
import Bubble from '../components/bubble'
import { graphql } from 'gatsby'
import Subble from './subble'
import IntroSubble from '../components/IntroSubble'
import NavBar from '../components/NavBar'
import './blogPostTemplate.scss'
import style from './subble.module.scss'

export default ({ data }) => {
  const post = data.markdownRemark
  if (post.frontmatter.latestEditDate === post.frontmatter.postDate) {
    return (
      <Bubble>
      <NavBar />
      <div>
        <Subble styling = {[style.One, style.shadow]}>
          <div className = {style.blogPostFlex}>
            <h1>{post.frontmatter.title}</h1>
            <div>
              <p>Posted: {post.frontmatter.postDate}</p>
            </div>
          </div>
          <Subble styling = {[style.Two, style.shadow, style.blogPostBody]}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Subble>
        </Subble>
      </div>
      <IntroSubble />
    </Bubble>
    )
  } else {
    return (
      <Bubble>
        <NavBar />
        <div>
          <Subble styling = {[style.One, style.shadow]}>
            <div className = {style.blogPostFlex}>
              <h1>{post.frontmatter.title}</h1>
              <div>
                <p>Posted: {post.frontmatter.postDate}</p>
                <p>
                  {post.frontmatter.datePrefix} {post.frontmatter.latestEditDate}
                </p>
              </div>
            </div>
            <Subble styling = {[style.Two, style.shadow, style.blogPostBody]}>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Subble>
          </Subble>
        </div>
        <IntroSubble />
      </Bubble>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        postDate(formatString: "dddd[,] MMMM Do[,] YYYY[,] h:mm a")
        latestEditDate(formatString: "dddd[,] MMMM Do[,] YYYY[,] h:mm a")
        datePrefix
      }
    }
  }
`
