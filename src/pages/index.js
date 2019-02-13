import React from 'react';
import { graphql } from 'gatsby';
import Bubble from '../components/bubble';
import IntroSubble from '../components/IntroSubble';
import BlogCollatorSubble from '../components/BlogSubble';
import BlogPostSubble from '../components/blogPostSubble';
import NavBar from '../components/NavBar';

const IndexPage = ({ data }) => (
	<Bubble>
		<IntroSubble />
		<NavBar />
		<BlogCollatorSubble>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<BlogPostSubble
					title={node.frontmatter.title}
					caption={node.frontmatter.caption}
					postDate={node.frontmatter.postDate}
					editDate={node.frontmatter.latestEditDate}
					link={node.fields.slug}
					editPrefix={node.frontmatter.datePrefix}
				/>
			))}
		</BlogCollatorSubble>
	</Bubble>
);

export const query = graphql`
	{
		allMarkdownRemark(
			sort: { fields: [frontmatter___latestEditDate], order: DESC }
			filter: { fileAbsolutePath: { regex: "/posts/" } }
		) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						postDate(formatString: "dddd[,] MMMM Do[,] YYYY[,] h:mm a")
						latestEditDate(formatString: "dddd[,] MMMM Do[,] YYYY[,] h:mm a")
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
`;

export default IndexPage;
