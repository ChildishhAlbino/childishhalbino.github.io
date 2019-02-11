import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Children } from "react";
import HeaderItem from "./HeaderItems/headerItem";

import HeaderPhoto from "../../images/weiic.jpg";

import "./header.scss";

const Header = ({ siteTitle, children }) => (
  <div>
    <header className="header">
      <HeaderItem link="/" title="HOME" />
      <HeaderItem link="/about/" title="ABOUT" />
      <HeaderItem link="/projects/" title="PROJECTS" />
      <HeaderItem link="/contact/" title="CONTACT" />
    </header>
    <div>
      {children}
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
