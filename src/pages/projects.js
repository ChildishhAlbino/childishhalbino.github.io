import React from 'react';
import MarkdownViewer from '../components/MarkdownViewer/markdownViewer';
import Layout from '../components/layout/layout.js';
import SEO from '../components/seo';
import { StaticQuery, graphql } from 'gatsby';

const ProjectsPage = () => (
	<StaticQuery
		query={infoQuery}
		render={(data) => {
			const cards = data.allMarkdownRemark.edges;
			return (
				<Layout>
					<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
					<h1>PROJECTS</h1>
					<MarkdownViewer styling="projects" cards={cards} />
				</Layout>
			);
		}}
	/>
);

export default ProjectsPage;

const infoQuery = graphql`
	query {
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/projects/" } }
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
