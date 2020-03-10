import React, { Component } from 'react';
import AccordionItem from '../Accordion/AccordionItem';
import Accordion from '../Accordion/Accordion';

import { faSnowman, faMale, faGamepad, faHeart, faCogs, faCoffee, faChartArea } from '@fortawesome/free-solid-svg-icons'

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
          <AccordionItem title='Summary' icon={faMale} isOpen={true}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>
                      Hey, I'm Dan, a game programmer and engineer from Melbourne, Australia.
                      I develop games primarily in Unity, and also work as an Automation Engineer.
                    </p>
                    <p>
                      Video games and programming have been a pivotal part of who I am, and Game development
                      combines all of the things I enjoy the most: maths, problem solving, creativity, language
                      and music. The process of bringing all of these together in an elegant solution though programming
                      is what I love doing.
                    </p>
                    <p>
                      <strong>Skillset summary:</strong>
                      <ul>
                        <li>Unity and C# - Core game systems, tools, and AI. See <a href='#/projects'>projects</a> for further details</li>
                        <li>CI/CD - Automated build pipelines</li>
                        <li>Infrastructure - AWS, Kubernetes</li>
                        <li>Authentication and communications security</li>
                        <li>Configuration automation and reconciliation</li>
                      </ul>
                    </p>
                    <p>
                      <strong>Programming toolset:</strong>
                      <ul>
                        <li>Primary languages: C# (Unity, WPF), Golang, Javascript (React)</li>
                        <li>Configuration languages: json, xml, yaml, dhall</li>
                        <li>Databases: Mongo, Oracle</li>
                      </ul>
                    </p>
                  </td>
                  {window.innerWidth > 800 ? 
                    <td>
                      <img src={meImg} alt='' style={{margin:'20px'}} />
                    </td>
                  :
                    void 0
                  }
                </tr>
              </tbody>
            </table>
          </AccordionItem>
          <AccordionItem title='Skills and Experience' icon={faChartArea}>
            <p>
              <strong>Game programming focus in Unity:</strong>
              <ul>
                <li>A node-based graph editor to create AI behaviour, with runtime visibility</li>
                <li>Level editors to facilitate rapid level building and testing </li>
                <li>A reusable 2D player controller for platformers</li>
                <li>A resuable behavioural AI system allowing runtime customisation</li>
                <li>Refactoring and scaling core game systems to enhance overall game control and maintainability</li>
              </ul>
            </p>
            <p>
              <strong>Professional experience outside of games:</strong>
              <ul>
                <li>CI/CD pipelines built on Kubernetes and using Concourse</li>
                <li>Test Automation processes and practices for integration</li>
                <li>Graphical tools for Windows (C#/WPF) to enhance national processes</li>
                <li>Refactoring, maintaining and documenting libraries and applications</li>
              </ul>
            </p>
            <p>
              <strong>Shared experience:</strong>
              <ul>
                <li>Developing scalable and maintainable applications, including long-term projects and game jams</li>
                <li>Documentation and tutorials for both technical and non-tehcnical audiences, including for individuals, small teams, and national and offshore teams</li>
                <li>Running training sessions and providing ongoing support for systems and processes developed by others and by myself</li>
              </ul>
            </p>
          </AccordionItem>
          <AccordionItem title='Work History' icon={faCogs} hidden={true}>
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
              relevant again. A few months later, I started development on my <a href='#/projects/clumsybat'>first mobile game</a> using
              Unity. This game was a big learning process for developing tools
              and editors within the game engine, as well as end to end development from concept to
              play-testing and deployment. The latest project I have been working on
              is <a href='#/projects/chaostavern'>Chaos Tavern</a> at Dragonbear Studios.
            </p>
          </AccordionItem>
          <AccordionItem title='Why I Love Game Development' icon={faHeart} hidden={true}>
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
          <AccordionItem title='Bonus Content (hobbies)' icon={faCoffee}>
            <table>
              <tbody>
                <tr>
                  <td>
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
                      I've also dabbled in 3D modelling for fun (this guitar is something I modeled in Blender 3D), and I have to say it's changed the way I look at any animated film, forever.
                    </p>
                    {window.innerWidth <= 800 &&
                      <td>
                        <img src={guitarImg} alt='Took 12 hours O_O' style={{margin:'20px', height:'180px'}} />
                      </td>
                    }
                  </td>
                  {window.innerWidth > 800 &&
                    <td>
                      <img src={guitarImg} alt='Took 12 hours O_O' style={{margin:'20px', height:'180px'}} />
                    </td>
                  }
                </tr>
              </tbody>
            </table>
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
              GitHub: <a href='https://github.com/Aspekt1024'>Aspekt1024</a>
            </p>
            <p>
              LinkedIn: <a href='https://www.linkedin.com/in/dan-szabo-02ab952b/'>Dan Szabo</a>
            </p>
            <p>
              Email: <a href='mailto:aspektgames@gmail.com'>aspektgames@gmail.com</a>
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }

}

export default About;