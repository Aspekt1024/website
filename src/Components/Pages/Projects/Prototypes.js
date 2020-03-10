import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'
import GridItem from '../../Grid/GridItem'

const subImg = require('../../../Images/prototypes/submarine.jpg')
const hexapawnImg = require('../../../Images/prototypes/hexapawn.png')
const pcAnimated = require('../../../Images/prototypes/blink.gif')
const pcStatic = require('../../../Images/prototypes/blink-static.jpg')

const goapImg = ''

class Prototypes extends Component {
  render() {
    return (
      <ProjectPageBase title='Prototypes'>
        <div className='grid'>

          <GridItem title='2D Player Controller'
            image={pcStatic} animatedImage={pcAnimated}
            link='#/projects/playercontroller'
          >
            2D player controller implementation in Unity
          </GridItem> 

          <GridItem title='Water Physics' image={subImg} link='#/projects/submarine'>
            An experiment with mesh manipulation to simulate movement in water
          </GridItem>

          <GridItem title='Hexapawn' image={hexapawnImg} link='#/projects/hexapawn'>
            A simple game demonstrating machine learning
          </GridItem>

          <GridItem title='GOAP AI System' image={goapImg} link='#/projects/goap'>
            AI with an extendable state machine that can be modified at runtime
          </GridItem>

        </div>
      </ProjectPageBase>
    )
  }
}
export default Prototypes;