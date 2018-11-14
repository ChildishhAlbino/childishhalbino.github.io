import React from "react";
import Subble from "../components/subble";
import style from "../components/subble.module.scss";
import { FaTwitter, FaEnvelopeSquare, FaGithub, FaLinkedin } from "react-icons/fa/";
import { IconContext } from "react-icons";

const ContactSubbleBar = () => (
  <Subble styling={[style.navBar, style.contactBarFlex, style.shadow]}>
    <a
      href="https://twitter.com/ChildishhAlbino"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Subble styling={[style.navBarItem, style.shadow, style.contactItemFlex]}>
        <IconContext.Provider
          value={{ className: style.reactIcons, size: 100 }}
        >
          <FaTwitter />
        </IconContext.Provider>
        <h2>@ChildishhAlbino</h2>
      </Subble>
    </a>
    <a
      href="https://github.com/ChildishhAlbino"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Subble styling={[style.navBarItem, style.shadow, style.contactItemFlex]}>
        <IconContext.Provider
          value={{ className: style.reactIcons, size: 100 }}
        >
          <FaGithub />
        </IconContext.Provider>
        <h2>/ChildishhAlbino</h2>
      </Subble>
    </a>
    <a
      href="https://twitter.com/ChildishhAlbino"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Subble styling={[style.navBarItem, style.shadow, style.contactItemFlex]}>
        <IconContext.Provider
          value={{ className: style.reactIcons, size: 100 }}
        >
          <FaEnvelopeSquare />
        </IconContext.Provider>
        <h2>connorandrewwilliams.work@gmail.com</h2>
      </Subble>
    </a>
    <a
      href="https://www.linkedin.com/in/childishhalbino/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Subble styling={[style.navBarItem, style.shadow, style.contactItemFlex]}>
        <IconContext.Provider
          value={{ className: style.reactIcons, size: 100 }}
        >
          <FaLinkedin/>
        </IconContext.Provider>
        <h2>/ChildishhAlbino</h2>
      </Subble>
    </a>
  </Subble>
);

export default ContactSubbleBar;
