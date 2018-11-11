import React from "react";
import Subble from "../components/subble";
import style from "./subble.module.scss";

const TallyTabPage = ({ children, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <Subble styling={[style.shadow, style.download]}>
      {children}
    </Subble>
  </a>
);

export default TallyTabPage;
