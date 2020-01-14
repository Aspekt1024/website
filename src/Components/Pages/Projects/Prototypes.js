import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'
import GridItem from '../../Grid/GridItem'

const subImg = require('../../../Images/submarine.jpg')
const hexapawnImg = require('../../../Images/hexapawn.png')
const pcAnimated = require('../../../Images/blink.gif')
const pcStatic = require('../../../Images/blink-static.jpg')

const rtsImg = ''

class Prototypes extends Component {
  render() {
    return (
      <ProjectPageBase title='Prototypes'>
        <div className='grid'>

          <GridItem title='2D Player Controller'
            image={pcStatic} animatedImage={pcAnimated}
            link='#/projects/playercontroller'
          >
            2D player controller implementation in Unity3D
          </GridItem>

          <GridItem title='Water Physics' image={subImg} link='#/projects/submarine'>
            An experiment with mesh manipulation to simulate movement in water
          </GridItem>

          <GridItem title='Hexapawn' image={hexapawnImg} link='#/projects/hexapawn'>
            A simple game demonstrating machine learning
          </GridItem>

          <GridItem title='Real Time Strategy Basics' image={rtsImg} link='#/projects/rts'>
            An experiment with mesh manipulation to simulate movement in water
          </GridItem>

        </div>
      </ProjectPageBase>
    )
  }
}
export default Prototypes;