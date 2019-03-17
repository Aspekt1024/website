import React, { Component } from 'react';
import ProjectPageBase from './ProjectPageBase';
import ProjectInfo from '../../ProjectComponents/ProjectInfo';

const splashImg = require('../../../Images/LonelyAstronaut.png')

class ProjectLA95 extends Component {

  constructor(props){
    super(props)

    this.state = {
      team: [
        'Dan Szabo - Programmer',
        'Daniel Newman - Programmer',
        'Felix Strangio - Art, Audio',
        'Kip Brennan - Design',
        'Stephen Pidgeon - Art',
      ],
    }
  }
  
  render() {
    return (
      <ProjectPageBase title='@LonelyAstronaut95'>
        <ProjectInfo
          year='2018'
          link='http://www.danscode.net/LonelyAstronaut/'
          linkText='WebGL'
          downloadLink='https://ggj.s3.amazonaws.com/games/2018/01/217465/src/LonleyAstronaut95.zip'
          downloadText='LonleyAstronaut95.zip (Source)'
          website='https://globalgamejam.org/2019/games/meow-meow-crash'
          websiteText='globalgamejam.org'
          team={this.state.team}
          >
          <img src={splashImg} alt='' />
        </ProjectInfo>
        
        <h4>About</h4>
        LonelyAstronaut95 is stranded far from home. They don’t know any of the surrounding
        civilisations and are too far from home to communicate. Desperate for friendship,
        their only method of interaction with the outside universe is via a social media
        device - using a language that they do not know. LonelyAstronaut95 was developed for Global Game Jam 2018

        <h4>Theme</h4>
        Transmission
        
        <h4>Game Jam Scenario</h4>
        <p>
          This game jam team was half-formed before the day. Being my first game jam, I had no
          idea what to expect. I was thrilled to be the lead programmer in a team that
          successfully completed a playable game in under 48 hours.
        </p>
        <p>
          The post-gamejam fixes were minimal, and aimed to deliver a smoother playthrough
          for the Melbourne Play Party, involving a simple, less random planet personality system.
        </p>

      </ProjectPageBase>
    )
  }
}
export default ProjectLA95;