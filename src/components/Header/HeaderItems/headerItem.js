import { Link } from "gatsby";
import React from "react";

import "./headerItem.scss";

const HeaderItem = ({ title, link }) => (
  <Link to={link} className="headerItem">
    <h1>{title}</h1>
  </Link>
);

export default HeaderItem;
