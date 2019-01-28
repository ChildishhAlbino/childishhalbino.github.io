import React from "react";
import { Link } from "gatsby";
import customStyle from "./introSubble.module.scss";
import Subble from "./subble";
import headerPhoto from "../images/me.jpg";
import style from "./subble.module.scss";

const IntroSubble = () => (
  <Subble styling={[style.One, style.shadow]}>
    <div className={customStyle.introSubble}>
      <Subble
        styling={[
          style.navBar,
          style.shadow,
          customStyle.introHeading
        ]}
      >
        <Subble styling={[style.navBarItem, style.shadow]}>
          <h1>
            Hi, I'm <i>Connor Williams!</i>
          </h1>
        </Subble>
      </Subble>
      <Subble styling={[style.Two, style.shadow]}>
        <div className={customStyle.blurb}>
          <img className={style.shadow} src={headerPhoto} alt="me.jpg" />
          <div className={[customStyle.blurbText]}>
            <p>
              I'm a Software Developer from Sydney who recently graduated with a
              Diploma of Software Development. This is a personal blog for me to
              learn web development and showcase my{" "}
              <Link to="projects">projects.</Link>
            </p>
            <br></br>
            <p>
              Feel free to learn some more about me{" "}
              <Link to="about">here!</Link>
            </p>
            <br></br>
            <i className={customStyle.disclaimerText}>This website is currently under construction. There might be some bugs. Sorry!</i>
          </div>
        </div>
      </Subble>
    </div>
  </Subble>
);

export default IntroSubble;
