import React from "react";
import Bubble from "../components/bubble";
import NavBar from "../components/NavBar";
import Subble from "../components/subble";
import IntroSubble from "../components/IntroSubble";
import style from "../components/subble.module.scss";
import ContactSubbleBar from "../components/contactSubble";

const ContactPage = () => (
  <Bubble>
    <NavBar />
    <Subble styling={[style.Two, style.shadow]}>
      <h1>Contact Me!</h1>
      <Subble styling={[style.Three, style.shadow, style.contactItems]}>
        <ContactSubbleBar />
      </Subble>
    </Subble>
    <IntroSubble />
  </Bubble>
);

export default ContactPage;
