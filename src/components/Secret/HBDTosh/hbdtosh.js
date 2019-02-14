import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Markdown from 'react-markdown';
import './hbdTosh.scss';
const HBDTOSH = () => {
	return (
		<StaticQuery
			query={query}
			render={(data) => {
				const post = data.allMarkdownRemark.edges[0];
				return (
					<div className="hbdTosh">
						<Markdown source={post.node.rawMarkdownBody} />
					</div>
				);
			}}
		/>
	);
};

export default HBDTOSH;

const query = graphql`
	query {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hbdtosh/" } }) {
			edges {
				node {
					rawMarkdownBody
				}
			}
		}
	}
`;
