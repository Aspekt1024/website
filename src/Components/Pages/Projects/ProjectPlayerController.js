import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'
import ImgAnim from '../../ProjectComponents/ImgAnim'

const pcStatic = require('../../../Images/prototypes/playercontroller2d.jpg')
const pcAnimated = require('../../../Images/prototypes/playercontroller2d.gif')
const waterStatic = require('../../../Images/prototypes/water.jpg')
const waterAnimated = require('../../../Images/prototypes/water.gif')

class ProjectPlayerController extends Component {
  render() {
    return (
      <ProjectPageBase title='2D Player Controller'>
        player controller
        <ImgAnim static={pcStatic} animated={pcAnimated} />
        <ImgAnim static={waterStatic} animated={waterAnimated} />
      </ProjectPageBase>
    )
  }
}
export default ProjectPlayerController;