import PropTypes from 'prop-types';
import React from 'react';
import HeaderItem from './HeaderItems/headerItem';
import './header.scss';

const Header = ({ siteTitle, children }) => (
	<div>
		<header className="header shadow">
			<HeaderItem link="/" title="HOME" />
			<HeaderItem link="/about/" title="ABOUT" />
			<HeaderItem link="/projects/" title="PROJECTS" />
			<HeaderItem link="/contact/" title="CONTACT" />
		</header>
		<div>{children}</div>
	</div>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
