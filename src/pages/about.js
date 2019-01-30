import React from 'react'
import Bubble from '../components/bubble'
import NavBar from '../components/NavBar'
import Subble from '../components/subble'
import style from '../components/subble.module.scss'
import IntroSubble from '../components/IntroSubble';
import BioSubble from '../components/bioSubble';

const AboutPage = () => (
  <Bubble>
    <NavBar />
    <IntroSubble></IntroSubble>
    <Subble styling={[style.One, style.shadow]}>
      <div className={style.aboutBody}>
        <Subble styling={[style.Two, style.shadow]}>
          <BioSubble toggle={true} title="Summary:">
            <p>
              I'm Connor, a Software Developer from Western Sydney. I'm 19-years-old and passionate about programming and Software Developement. I'm an open-minded person, who works well both individually and as part of a team. I'm motivated and eager to learn how to become a great developer. I'm currently not working in the industry but I'm looking to start. I'm proficient in langauges such as Java and C# and competent with web-based languages / frameworks including NodeJS, React / GatsbyJS, etc. I'm an adept problem solver and a quick learner.
            </p>
          </BioSubble>
          <BioSubble toggle={false} title="More than the tl;dr:">
            <h3><i>The Computer Guy:</i></h3>
            <p>
              Since a young age; I've had an interest in - and been very good with computers. My Dad worked in IT when I was born and I look back fondly on memories of building my first desktop PC (with his help of course) or the shock on his face when a five-year-old me worked out how to install a PC game (Monster's Inc.) I wanted to play because he wouldn't install it for me. Looking back, that would be a reoccuring theme in my life.
            </p>
            <br></br>
            <p>
              Because of those early experiences; I've always loved computers. I've become the person people turn to for hardware and software inquiries. During my early teens - I developed a passion for building computers and helped many friends enter into PC gaming. Recently, I've helepd two close friends build their relative high-end computers from start to finish, and both were incredibly satisfied with the results and appreciative of my skillset.
            </p>
            <br></br>
            <h3><i>Why Software then?</i></h3>
            <p>
              You might be asking yourself - <i>'why did he choose to be a Software Developer then?"</i> The answer is simple
              - Minecraft. Thirteen-year-old me LOVED Minecraft. I loved building Redstone (the game's version of electrical circuitry) contraptions especially. It was at this point that I decided to learn how to 'mod' the game. Using a YouTube tutorial - I modified the game and added custom blocks for no reason other than my own enjoyment. While I never actually fleshed out these mods - it ignited a spark for programming that has lasted to this day.
            </p>
            <br></br>
            <p>
              Python was where I really learned programming. Year 9 IST quickly became myself and my friend rapidly accelerating past the rest of the class and even our teacher. We pushed each other to learn new things and while the scripts we wrote weren't pretty to look at, they taught us the fundamentals of coding. In hindsight, this is the point I decided I'd become a Software Developer.
            </p>
            <br></br>
            <p>
              Going forward from that point; especially as High School came to a close, I'd use every excuse to program. There were many times I'd write a Python script to solve repetive problems in Physics or Maths, or use spare time in my other classes to finish off scripts that played games like Rock, Paper, Scissors. It was really fun and I still find myself doing this now.
            </p>
            <br></br>
            <h3><i>Confidence Boost:</i></h3>
            <p>
              Despite how often I programmed; I didn't consider myself that <i>good</i> at it until my major project of IPT. We had to produce some form of Information System, and being a basketball fan - I designed an application that allowed our school basketball team to score and time the games rather than using a paper system. After a recommendation to try Unity, I looked into it and quickly picked up C# and the Unity interface to develop a prototype in roughly a week. Looking back at the code now; I can easily pick out hundreds of errors, but it taught me about Objective Oriented Programming and software architechture. I went on to learn more about those topics and programming in general at TAFE - cementing my passion for programming and Sofware Developement. I'm eager to enter the industry and improve even more as a developer and as a person.
            </p>
            <br></br>
            <h3><i>Today:</i></h3>
            <p>
              As I'm not currently employed in the industry, I'm spending time developing side projects in a variety of languages and frameworks to improve as a developer overall and to produce a well-rounded portfolio. As a developer; I'm a quick learner and I pick up new languages, frameworks, and practices fast. I'm pragmatic about problem solving and do my best to be foward thinking with all possible solutions. I have an ability to detect the root cause of an error and eliminate red herrings easily. I'm always willing to try new things and I work well with team members.
            </p>
            <br></br>
            <h3><i>Outside of the Industry:</i></h3>
            <p>
              When I'm not programming or developing side projects - I'm an avid basketball fan. I've been playing since I was in Year 9. I also like playing video games such as League of Legends, and I'm fond of eSports. I also enjoy Skiing.
            </p>
          </BioSubble>
          <BioSubble toggle={false} title="Education:">
            <ul>
              <h3><li>Diploma of Software Development <i>(completed, June 2018)</i></li></h3>
              <h3><li>Higher School Certificate - Greystanes High School <i>(graduated, 2017)</i>
              </li></h3>
              <ul>
                <li>Band 5 in Hospitality</li>
                <li>Band 4 in Physics</li>
                <li>Band 4 in English</li>
                <li>Band 4 in IPT</li>
              </ul>
              <h3><li>Certificate II in Hospitality <i>(SIT20213)</i></li></h3>
            </ul>
          </BioSubble>
          {/* <BioSubble toggle={false} title="Experience:">
            
          </BioSubble> */}
        </Subble>
      </div>
    </Subble>
  </Bubble>
)

export default AboutPage
