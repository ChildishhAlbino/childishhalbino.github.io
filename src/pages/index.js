import React from 'react'
import { graphql } from 'gatsby'
import Bubble from '../components/bubble'
import IntroSubble from '../components/IntroSubble'
import BlogSubble from '../components/BlogSubble'
import BlogPostSubble from '../components/blogPostSubble'
import NavBar from '../components/NavBar'
const IndexPage = ({ data }) => (
  <Bubble>
    <IntroSubble />
    <NavBar />
    <BlogSubble>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogPostSubble
          title={node.frontmatter.title}
          caption={node.frontmatter.caption}
          postDate = {node.frontmatter.postDate}
          editDate={node.frontmatter.currentDate}
          link={node.fields.slug}
          editPrefix = {node.frontmatter.datePrefix}
        />
      ))}
    </BlogSubble>
  </Bubble>
)

export const query = graphql`
{
  allMarkdownRemark(sort: { fields: [frontmatter___currentDate], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          postDate(formatString: "LLLL")
            currentDate(formatString: "LLLL")
          caption
          datePrefix
        }
        fields {
          slug
        }
      }
    }
  }
}
`

export default IndexPage
