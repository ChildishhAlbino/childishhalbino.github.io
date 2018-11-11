import React from 'react'
import { graphql } from 'gatsby'
import Bubble from '../components/bubble'
import IntroSubble from '../components/IntroSubble'
import BlogColatorSubble from '../components/BlogSubble'
import BlogPostSubble from '../components/blogPostSubble'
import NavBar from '../components/NavBar'

const IndexPage = ({ data }) => (
  <Bubble>
    <IntroSubble />
    <NavBar />
    <BlogColatorSubble>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogPostSubble
          title={node.frontmatter.title}
          caption={node.frontmatter.caption}
          postDate = {node.frontmatter.postDate}
          editDate={node.frontmatter.latestEditDate}
          link={node.fields.slug}
          editPrefix = {node.frontmatter.datePrefix}
        />
      ))}
    </BlogColatorSubble>
  </Bubble>
)

export const query = graphql`
{
  allMarkdownRemark(sort: { fields: [frontmatter___latestEditDate], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          postDate(formatString: "LLLL")
          latestEditDate(formatString: "LLLL")
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
