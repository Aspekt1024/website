import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'
import ImgAnim from '../../ProjectComponents/ImgAnim'
import ProjectInfo from '../../ProjectComponents/ProjectInfo'

const pcStatic = require('../../../Images/prototypes/playercontroller2d.jpg')
const pcAnimated = require('../../../Images/prototypes/playercontroller2d.gif')
const waterStatic = require('../../../Images/prototypes/water.jpg')
const waterAnimated = require('../../../Images/prototypes/water.gif')
const splashImg = require('../../../Images/prototypes/blink-static.jpg')

class ProjectPlayerController extends Component {

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
      <ProjectPageBase title='2D Player Controller'>
        <ProjectInfo
          year='2017'
          github='/Aspekt1024/PlayerController2D'
          team={this.state.team}
        >
        <img src={splashImg} alt='' />
        </ProjectInfo>
        <h3>About</h3>
        <p>
          The 2D player controller was developed for reuse for 2D platformers, and is used in <a href='#/projects/trixie'>Trixie</a>.
        </p>
        <h3>Features</h3>
        <p>
          The key features of this implementation are:
        <ul>
          <li>Base character behaviour - running, jumping, enabling and disabling abilities</li>
          <li>Customisability - the ability to extend and behaviour</li>
          <li>Keybinding - customisation with multiple controller types</li>
        </ul>
        </p>
        <h3>Demonstration</h3>
        <p>
          The base implementation of the controller includes movement and basic abilities such as jumping.
          The demo below shows abilities (traits) being unlocked and then their use.
        </p>
        <ImgAnim static={pcStatic} animated={pcAnimated} caption="Test run of the player controller" />
        <p>
          Extending this to include substances (e.g. bouncing pads, water, flight) was achievable without having to modify the base code.
        </p>
        <ImgAnim static={waterStatic} animated={waterAnimated} caption="Adding interactable substances and flight" />
      </ProjectPageBase>
    )
  }
}
export default ProjectPlayerController;