import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'
import ProjectInfo from '../../ProjectComponents/ProjectInfo'
import ImgAnim from '../../ProjectComponents/ImgAnim'

const modulesImg = require('../../../Images/prototypes/GOAP/modules.jpg')
const splashImg = require('../../../Images/prototypes/GOAP/splash.jpg')

class ProjectGOAP extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      team: [
        'Dan Szabo',
      ]
    }
  }

  render() {
    return (
      <ProjectPageBase title='GOAP AI System'>
        <ProjectInfo 
          year='2017 & 2019'
          github='/Aspekt1024/LittleDrones'
          team={this.state.team}
        >
          <img src={splashImg} alt='' />
        </ProjectInfo>
        <h3>About</h3>
        <p>
          Goal Oriented Action Planning (<a href='https://gamedevelopment.tutsplus.com/tutorials/goal-oriented-action-planning-for-a-smarter-ai--cms-20793' target='_blank' rel='noopener noreferrer'>GOAP</a>)
          is an AI system similar to a Finite State Machine (FSM), where the transitions between
          states are not hard coded, and are instead automatically calculated at runtime. 
        </p>
        <h3>Runtime Customisation</h3>
        <p>
          This implementation of GOAP allows Goals, Actions and Sensors to be added and removed at any time during gameplay.
          <ImgAnim static={modulesImg} caption="GOAP AI modules in-game UI example" />
        </p>
        <p>
          The intention is to allow player customisation of AI based on modules they find in-game, or to have certain modules
          disabled during certain events. Modules can be removed at any point, even mid-execution.
        </p>
        <h3>Portability</h3>
        <p>
          This AI system can be easily imported into other projects. See <a href='#/projects/trixie'>Trixie</a> (under
          AI System) for an example of this.
        </p>
        <h3>Demonstration</h3>
        <p>
          The video below demonstrates an AI set up using this system:
        </p>
        <iframe title='goapdemo'
          className='youtube-vid'
          src="https://www.youtube.com/embed/6hwz5PQqSf4"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen='allowfullscreen'>
        </iframe>
        <p>
          The AI is made up of three types of components:
          <ul>
            <li>Goals (e.g. maintain fuel, collect resources)</li>
            <li>Sensors (to detect resources, buildings, etc)</li>
            <li>Actions (to fulfil a Goal)</li>
          </ul>
        </p>
        <p>
          Goals are prioritised. In this instance the AI will prioritise keeping its fuel supply up,
          and retrieve coal over gathering resources when its fuel is low. Otherwise it will collect
          resources if it can find any and return them to the storage depot.
        </p>
        <p>
          GOAP allows the AI to find the most efficient method of achieving a goal. In this instance,
          collecting iron from the deposit takes longer than collecting free-standing iron, so it will
          prioritise an action plan to pick up free-standing iron when it can.
        </p>

      </ProjectPageBase>
    )
  }
}
export default ProjectGOAP;