import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import MarkdownViewer from '../components/MarkdownViewer/markdownViewer';
import Layout from '../components/layout/layout.js';
import SEO from '../components/seo';

const AboutPage = () => (
	<StaticQuery
		query={infoQuery}
		render={(data) => {
			const cards = data.allMarkdownRemark.edges;
			console.log(cards);
			return (
				<Layout>
					<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
					<h1>ABOUT</h1>
					<MarkdownViewer cards={cards} />
				</Layout>
			);
		}}
	/>
);

export default AboutPage;

const infoQuery = graphql`
	query {
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/bio/" } }
			sort: { fields: [frontmatter___order], order: ASC }
		) {
			edges {
				node {
					id
					rawMarkdownBody
				}
			}
		}
	}
`;
