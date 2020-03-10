import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'
import ImgAnim from '../../ProjectComponents/ImgAnim'
import ProjectInfo from '../../ProjectComponents/ProjectInfo'

const pcStatic = require('../../../Images/prototypes/playercontroller2d.jpg')
const pcAnimated = require('../../../Images/prototypes/playercontroller2d.gif')
const waterStatic = require('../../../Images/prototypes/water.jpg')
const waterAnimated = require('../../../Images/prototypes/water.gif')

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
        />
        <p>
          <strong>Under Construction</strong>
        </p>
        <p>
          The player controller was developed for use in the game Trixie. This prototype took two weeks (of afternoons) to complete,
          and kept the concept of extension in mind, so additional mechanics could easily be added.
        </p>
        <p>Key features:</p>
        <ul>
          <li>Keybinding</li>
          <li>Base character behaviour</li>
          <li>Design & flow</li>
          <li>Customisability</li>
        </ul>
        <ImgAnim static={pcStatic} animated={pcAnimated} caption="Test run of the player controller" />
        <ImgAnim static={waterStatic} animated={waterAnimated} caption="Adding interactable substances" />
      </ProjectPageBase>
    )
  }
}
export default ProjectPlayerController;