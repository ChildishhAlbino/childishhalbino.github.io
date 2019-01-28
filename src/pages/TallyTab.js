import React from "react";
import Bubble from "../components/bubble";
import NavBar from "../components/NavBar";
import Subble from "../components/subble";
import IntroSubble from "../components/IntroSubble";
import DownloadSubble from "../components/DownloadSubble";
import style from "../components/subble.module.scss";

const TallyTabPage = () => (
  <Bubble>
    <NavBar />
    <Subble styling={[style.One, style.shadow]}>
      <h1>
        TallyTab: <i>Never lose track of your tabs again!</i>
      </h1>
      <Subble styling={[style.Two, style.shadow, style.inlineRow, style.tallyTabFlex]}>
        <img
          className={[style.inlineImages]}
          src="https://i.imgur.com/s2CU3o8.png"
          alt="tallyTabUserScreen" />
        <div>
          <p className = {style.blurbText}> <i>Tally tab</i> is a piece of software that enables bars, restaurants, and function halls to keep track of
          of consumption of products on a tab. </p>
          <div className={[style.inlineColumn, style.wrap, style.featuresList]}>
            <Subble styling={[style.Three, style.shadow, style.featuresListItem]}>
              <p>Tech Stack:</p>
              <ul>
                <li>Java / Java FX</li>
              </ul>
            </Subble>
            <Subble styling={[style.Three, style.shadow, style.featuresListItem]}>
              <p>Technical Requirements:</p>
              <ul>
                <li>Windows 7 or Mac OSX</li>
                <li>Java 8+</li>
              </ul>
            </Subble>
            <Subble styling={[style.Three, style.shadow, style.featuresListItem]}>
              <p>Features: </p>
              <ul>
                <li>Menu builder and editor</li>
                <li>Saving and loading of functions and drinks menus</li>
                <li>Manages multiple functions at once</li>
                <li>Keeps a history of all changes made to the tab</li>
              </ul>
            </Subble>
            <Subble styling={[style.Three, style.shadow, style.featuresListItem]}>
              <div className={[style.spacedEvenly, style.wrap]}>
                <p>Current Version: Alpha 1.7.1</p>
                <DownloadSubble link="https://github.com/ChildishhAlbino/TallyTab/releases/download/d9d684a/TallyTab.V1.7.1a.zip">
                  <p>Download</p>
                </DownloadSubble>
                <DownloadSubble link="https://github.com/ChildishhAlbino/TallyTab/releases/tag/d9d684a">
                  <p>Changelog</p>
                </DownloadSubble>
              </div>
            </Subble>

          </div>


        </div>
      </Subble>
    </Subble>
    <IntroSubble />
  </Bubble>
);

export default TallyTabPage;
