import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'
import GridItem from '../../Grid/GridItem'

const mmcImg = require('../../../Images/gamejam/mmc.png')
const laImg = require('../../../Images/gamejam/la.png')

class ProjectGameJam extends Component {
  render() {
    return (
      <ProjectPageBase title='Game Jam Games'>
        <div className='grid'>
          <GridItem title='Lonely Astronaut 95' image={laImg} link='#/projects/la95'>
            Make friends with surrounding civilisations using an unknown language
          </GridItem>
          <GridItem title='Meow Meow Crash' image={mmcImg} link='#/projects/mmc'>
            How much destruction can you do as a cat before getting bored?
          </GridItem>
        </div>
      </ProjectPageBase>
    )
  }
}
export default ProjectGameJam;