import React from 'react'
import Bubble from '../components/bubble'
import NavBar from '../components/NavBar'
import Subble from '../components/subble'
import IntroSubble from '../components/IntroSubble'
import DownloadSubble from '../components/DownloadSubble'
const TallyTabPage = () => (
  <Bubble>
    <NavBar />
    <Subble stylingClass="subble One shadow">
      <h1>
        TallyTab: <i>Never lose track of your tabs again!</i>
      </h1>
      <Subble stylingClass="subble Two shadow ">
        <p>
          Tally tab is a computer program that allows bars, restaurants, and
          individuals to keep a track of drink consumption and keep track of a
          tab for a particular group, event / function, or person.
        </p>
        <div class="inlineRow Wrap">
          <img
            class="inlineImages"
            src="https://i.imgur.com/gYFe4yB.png"
            alt="tallyTabUser.jpg"
          />
          <div class="inlineColumn Features">
            <Subble stylingClass="subble Three shadow">
              <p>Tech Stack:</p>
              <ul>
                <li>Java / Java FX</li>
              </ul>
            </Subble>
            <Subble stylingClass="subble Three shadow">
              <p>Technical Requirements:</p>
              <ul>
                <li>Windows 7 or Mac OSX</li>
                <li>Java 8+</li>
              </ul>
            </Subble>
            <Subble stylingClass="subble Three shadow">
              <p>Features:</p>
              <ul>
                <li>Drinks Menu creator</li>
                <li>Saving and loading of functions and drinks menus</li>
                <li>Manages multiple functions at once</li>
                <li>Keeps a history of all changes made to the tab</li>
              </ul>
            </Subble>
            <Subble stylingClass="subble Three shadow">
              <div class="spacedEvenly">
                <p>Current Version: Alpha 1.5.1</p>
                <DownloadSubble 
                link="https://github.com/ChildishhAlbino/TallyTab/releases/download/a038a93/Alpha.1.5.1.zip">
                  <p>Download</p>
                </DownloadSubble>
                <DownloadSubble 
                link="https://github.com/ChildishhAlbino/TallyTab/releases/tag/a038a93">
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
)

export default TallyTabPage
