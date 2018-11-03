import React from 'react'
import Bubble from '../components/bubble'
import { graphql } from 'gatsby'
import Subble from './subble'
import IntroSubble from '../components/IntroSubble'
import NavBar from '../components/NavBar'
import './blogPostTemplate.scss'

export default ({ data }) => {
  const post = data.markdownRemark
  if (post.frontmatter.currentDate == null) {
    return (
      <Bubble>
        <NavBar />
        <div>
          <Subble stylingClass="subble One shadow">
            <div class="blogPostFlex">
              <h1>{post.frontmatter.title}</h1>
              <div>
                <p>Posted: {post.frontmatter.postDate}</p>
              </div>
            </div>
            <Subble stylingClass="subble Two shadow BlogPostBody">
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
          <Subble stylingClass="subble One shadow">
            <div class="blogPostFlex">
              <h1>{post.frontmatter.title}</h1>
              <div>
                <p>Posted: {post.frontmatter.postDate}</p>
                <p>
                  {post.frontmatter.datePrefix} {post.frontmatter.currentDate}
                </p>
              </div>
            </div>
            <Subble stylingClass="subble Two shadow BlogPostBody">
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
        postDate(formatString: "LLLL")
        currentDate(formatString: "LLLL")
        datePrefix
      }
    }
  }
`
