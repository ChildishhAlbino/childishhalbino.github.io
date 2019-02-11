import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../layout/layout.js';
import Markdown from 'react-markdown';

import './blogPostTemplate.scss';

export default (props) => {
	console.log(props);
	const post = props.data.markdownRemark;
	if (post.frontmatter.latestEdit === post.frontmatter.postDate) {
		return (
			<Layout>
				<div className="postHeader">
					<div>
						<h1>{post.frontmatter.title}</h1>
						<p>{post.frontmatter.caption}</p>
					</div>
					<div className="dateWrapper">
						<p>Posted: {post.frontmatter.postDate}</p>
					</div>
				</div>
				<Markdown className="blogPostBody" source={post.rawMarkdownBody} />
			</Layout>
		);
	} else {
		return (
			<Layout>
				<div className="postHeader">
					<div>
						<h1>{post.frontmatter.title}</h1>
						<p>{post.frontmatter.caption}</p>
					</div>
					<div className="dateWrapper">
						<p>Posted: {post.frontmatter.postDate}</p>
						<p>Edited: {post.frontmatter.latestEdit}</p>
					</div>
				</div>
				<Markdown className="blogPostBody" source={post.rawMarkdownBody} />
			</Layout>
		);
	}
};

export const postQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				caption
				postDate(formatString: "dddd[,] MMMM Do[,] YYYY[,] h:mm a")
				latestEdit(formatString: "dddd[,] MMMM Do[,] YYYY[,] h:mm a")
			}
			rawMarkdownBody
		}
	}
`;
