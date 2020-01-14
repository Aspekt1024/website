import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'
import ImgAnim from '../../ProjectComponents/ImgAnim'

const pcStatic = require('../../../Images/playercontroller2d.jpg')
const pcAnimated = require('../../../Images/playercontroller2d.gif')
const waterStatic = require('../../../Images/water.jpg')
const waterAnimated = require('../../../Images/water.gif')

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