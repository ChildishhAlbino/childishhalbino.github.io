import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import './blurb.scss';
import Markdown from 'react-markdown';

const Blurb = () => (
	<StaticQuery
		query={blurbQuery}
		render={(data) => (
			<div className="blurb">
				<Image fluid={data.image.childImageSharp.fluid} />
				<Markdown source={data.blurb.childMarkdownRemark.rawMarkdownBody} />
			</div>
		)}
	/>
);

export default Blurb;

const blurbQuery = graphql`
	query {
		image: file(relativePath: { eq: "blurb.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 2000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		blurb: file(relativePath: { eq: "blurb.md" }) {
			childMarkdownRemark {
				html
				htmlAst
				rawMarkdownBody
			}
		}
	}
`;
