import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../Header/header';
import Blurb from '../Blurb/blurb';

import './layout.scss';
const Layout = ({ children }) => (
	<StaticQuery
		query={footerQuery}
		render={(data) => (
			<div>
				<Header siteTitle="Hello.">
					<main>
						<div className="grid">
							<div className="gridItem shadow">
								<div className="children">
									{children} {/* page content goes here */}
								</div>
							</div>
							<div className="gridItem blurbItem shadow">
								<Blurb />
							</div>
						</div>
					</main>
				</Header>
				<footer>
					<p> Site built with GatsbyJS. Last build: {data.site.buildTime} </p>
				</footer>
			</div>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

const footerQuery = graphql`
	query {
		site {
			buildTime(formatString: "dddd[,] MMMM Do[,] YYYY[,] h:mm a")
		}
	}
`;
