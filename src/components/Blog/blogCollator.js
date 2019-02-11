import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import BlogSlug from "./BlogSlug/blogSlug";
import "./blogCollator.scss";

const BlogCollator = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="blogCollator">
        <div className="blogCollatorHeader">
          <h1>My {data.allMarkdownRemark.totalCount} Most Recent Blog Posts</h1>
        </div>

        {data.allMarkdownRemark.edges.map(({ node }) => {
          // console.log(node.frontmatter);
          return <BlogSlug key={node.id} data={node} />;
        })}
      </div>
    )}
  />
);

export default BlogCollator;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___latestEdit], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            postDate(formatString: "dddd[,] MMMM Do[,] YYYY[,] h:mm a")
            latestEdit(formatString: "dddd[,] MMMM Do[,] YYYY[,] h:mm a")
            caption
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
