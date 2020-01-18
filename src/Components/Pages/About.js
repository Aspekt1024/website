import React, { Component } from 'react';
import AccordionItem from '../Accordion/AccordionItem';
import Accordion from '../Accordion/Accordion';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowman, faMale, faGamepad, faHeart, faCogs, faCoffee, } from '@fortawesome/free-solid-svg-icons'

const meImg = require('../../Images/other/me1.jpg')
const guitarImg = require('../../Images/other/guitar3dmodel.png')

class About extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: [ true, false, false, false ]
    }
  }

  render() {
    return (
      <div className='page'>
        <h1>About Me</h1>
        <Accordion>
          <AccordionItem title='Who Am I?' icon={faMale} isOpen={true}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>Hey, I'm Dan, a game developer / engineer</strong> from Melbourne, Australia.
                      My focus is in game programming using Unity3D, where I write tools and systems to simplify
                      the game creation process. This includes level editors, node-based graph editors, and custom
                      inspectors, as well as game-mechanics including AI systems and level interaction.
                    </p>
                    <p>
                      <strong>Video games and programming have been a pivotal part of who I am</strong>, and Game development
                      combines all of the things I enjoy the most: maths, problem solving, creativity, language
                      and music. I love writing code, and I believe that what makes a great programmer is
                      someone who has a passion for the code they create and the way it's presented.
                    </p>
                    <p>
                    <strong>Many of my best achievements have been a result of programming</strong>. In high school, I made
                      calculator programs which helped me remember maths and physics formulas. At university
                      I developed a web-based vocabulary trainer for my German class, which I used for practice to achieve 100% on
                      almost all of my tests. In the workplace I developed, maintained and refactored tools
                      used by hundreds of team members nationally, some of which became the national standard
                      for our business process. Every time, <strong>the process of developing an elegant solution
                      through programming has been what I enjoy the most</strong>.
                    </p>
                  </td>
                  {window.innerWidth > 800 ? 
                    <td>
                      <img src={meImg} alt='' />
                    </td>
                  :
                    void 0
                  }
                </tr>
              </tbody>
            </table>
          </AccordionItem>
          <AccordionItem title='Why I Love Game Development' icon={faHeart}>
            <p>
              Of all the things to do in the world, why game development? While there’s no one simple
              answer, there are three main things that make game development so exciting:
            </p>
            <ol type='1'>
              <li>
                <strong>Games are something we can experience the universe through</strong>.
                There’s so much to explore and learn, and getting hands on experience isn’t always an
                option. Games offer an interactive way to experience and gain an intuition
                about how aspects of our universe fit together, as well as offer a medium
                to explore situations and emotions in a unique way.
              </li>
              <li>
                Technology is exciting, and <strong>the game industry pushes technology in new and
                creative ways</strong>. With a world full of collaborators
                working on open source or affordable software, tools and assets, there’s never
                been a better time to bring stories to life, share ideas and concepts, or tweak
                the rules of reality than through games.
              </li>
              <li>
              <strong>Game development combines all the things I love most</strong>: maths, creativity,
                problem-solving, language and music. I believe there’s no clear distinction between
                these fields, and games allow us to explore all of these things as a larger
                construct. The process of building a game involves piecing together a complex puzzle,
                resulting in a piece of interactive artwork we get to explore.
              </li>
            </ol>
          </AccordionItem>
          <AccordionItem title='My Background' icon={faCogs}>
            <p>
              I graduated from Melbourne University with an Electrical Engineering and Arts degree in
              2011, and started working at Australia's largest Telecommunications company in 2012. 
              What quickly became clear was each team had a huge need for programmers and people who
              could engineer and architect systems and pipelines. There were a lot of manual processes
              that had been around for decades, and programs that weren't ready to support new technologies
              being introduced; this is where my programming days really began.
            </p>
            <p>
              Programming has since been my chosen method of getting things done. For example, I was involved with
              the rollout of a new technology, and was able to develop a tool which automated the configuration
              process within our national team. This task initially took multiple days for a larger topology,
              and this tool was able to complete it in minutes. After pitching this idea and demonstrating a
              proof-of-concept to the management team, I was given the funding to complete its development.
              Soon after, it was deployed as the national standard for the design team.
            </p>
            <p>
              During the eight years at this company, I've also been involved with:
              <ul>
                <li>
                  Process and training documentation for tools I developed, and for new
                  technologies being introduced to our workforce
                </li>
                <li>
                  Delivery of training to the national and overseas workforce
                </li>
                <li>
                  Co-Lead Technical Support for our overseas workforce
                </li>
                <li>
                  Lead representative for the rollout of a key application and database used by our team
                </li>
                <li>
                  Maintaining and refactoring of existing tools used by the team
                </li>
                <li>
                  Developing and integrating CICD pipelines for various applications
                </li>
              </ul>
            </p>
            <p>
              In early 2016, I stumbled across an Unreal Engine course on Udemy. Suddenly, all of the
              maths, physics and problem solving I'd learned during my engineering degree were entirely
              relevant again. A few months later, I started development on my first mobile game using Unity3D.
              This game is nearing completion, and has been a big learning process for developing tools
              and editors within the game engine, as well as end to end development from concept to
              play-testing and deployment. Alongside this, I have a side-project that explores AI in-game.
            </p>
          </AccordionItem>
          <AccordionItem title='Bonus Content (hobbies)' icon={faCoffee}>
            <p>
              When I'm not coding, I'm likely doing one of the following:
            </p>
            <ul>
              <li>Playing music</li>
              <li>Training in aerials</li>
              <li>Learning German</li>
              <li>Trying out a new video game</li>
            </ul>
            <p>
              I've also dabbled in 3D modelling for fun (the guitar below is something I modeled in Blender 3D), and I have to say it's changed the way I look at any animated film, forever.
            </p>
            <img src={guitarImg} alt='Took 12 hours O_O' />
          </AccordionItem>
          <AccordionItem title='All-time Favourite Games' icon={faGamepad}>
            <p>A list subject to change based on factors outside of my control:</p>
            <ul>
              <li>The Legend of Zelda: Ocarina of Time</li>
              <li>Baldur's Gate</li>
              <li>Ori and the Blind Forest</li>
              <li>Final Fantasy VII</li>
              <li>Dark Souls</li>
            </ul>
          </AccordionItem>
          <AccordionItem title='Contact' icon={faSnowman}>
            <p>
              Twitter: <a href='https://twitter.com/aspekt1024'>@aspekt1024</a>
            </p>
            <p>
              LinkedIn: <a href='https://www.linkedin.com/in/dan-szabo-02ab952b/'>Dan Szabo</a>
            </p>
            <p>
              GitHub: <a href='https://github.com/Aspekt1024'>Aspekt1024</a>
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }

}

export default About;