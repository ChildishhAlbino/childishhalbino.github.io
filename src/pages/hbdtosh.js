import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Markdown from 'react-markdown';
import '../components/HBDTOSH.scss';
const IndexPage = () => {
	return (
		<StaticQuery
			query={query}
			render={(data) => {
				const post = data.allMarkdownRemark.edges[0];
				return (
					<div>
						<Markdown source={post.node.rawMarkdownBody} />
					</div>
				);
			}}
		/>
	);
};

export default IndexPage;

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
