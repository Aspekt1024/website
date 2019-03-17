import React, { Component } from 'react';
import ProjectPageBase from './ProjectPageBase';
import ProjectInfo from '../../ProjectComponents/ProjectInfo';

const splashImg = require('../../../Images/mmctrashed.png')

class ProjectMMC extends Component {

  constructor(props){
    super(props)

    this.state = {
      team: [
        'Brad Hill - Programmer',
        'Dan Szabo - Programmer',
        'Hayley Ritchie - 3D Art',
        'Tom Wilding - Programmer, Design',
      ],
    }
  }
  
  render() {
    return (
      <ProjectPageBase title='Meow Meow Crash'>
        <ProjectInfo
          year='2019'
          github='/Aspekt1024/GGJ2019'
          link='http://meowmeowcrash.s3-website-ap-southeast-2.amazonaws.com/'
          linkText='WebGL'
          downloadLink='https://ggj.s3.amazonaws.com/games/2019/01/196420/src/muk6w/MeowMeowCrashSource.zip'
          downloadText='MeowMeowCrash.zip (Source)'
          website='https://globalgamejam.org/2019/games/meow-meow-crash'
          websiteText='globalgamejam.org'
          team={this.state.team}
          >
          <img src={splashImg} alt='' />
        </ProjectInfo>
        
        <h4>About</h4>
        Play as a cat with the sole intention of causing the most amount of mess before
        inevitably getting bored and going to sleep. Compete against the world to get
        the highest score! Meow Meow Crash was developed for Global Game Jam 2019.

        <h4>Theme</h4>
        What home means to you
        
        <h4>Game Jam Scenario</h4>
        <p>
          Before the day of GGJ2019, the team had never met. This was a challenge I wanted to
          give myself this year. The dynamic was great, the team consisted of people with 
          varying skill levels and different skillsets, and in under 48 hours we successfully
          developed a playable game with a core gameplay loop!
        </p>
        <p>
          Post game jam, I did some work to fix some minor bugs and add a score system,
          which was frequently requested at the Melbourne Play Party.
        </p>
        
        <h4>Demonstration</h4>
        <p>
          The video below shows sample gameplay of the build submitted before the deadline:
        </p>
        <iframe title='submarinesample'
          className='youtube-vid'
          src='https://www.youtube.com/embed/BfvOMIfLX9U'
          frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen='allowfullscreen'>
        </iframe>

      </ProjectPageBase>
    )
  }
}
export default ProjectMMC;