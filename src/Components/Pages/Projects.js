import React, { Component } from 'react';
import GridItem from '../Grid/GridItem';

const ctImg = require('../../Images/chaostavernconcept.png')
const trixieImg = require('../../Images/trixie1.png')
const clumsyImg = require('../../Images/clumsy.png')
const ggjImg = require('../../Images/ggjlogo.png')

class Projects extends Component {

  render() {
    
    return (
      <div className='page'>
        <h1>Projects</h1>
        <div className='grid'>
          <GridItem title='Chaos Tavern' image={ctImg} link='#/projects/chaostavern'>
            A fun and frantic co-operative multiplayer game about running a fantasy tavern!
          </GridItem>
          <GridItem title='Trixie' image={trixieImg} link='#projects/trixie'>
            A 2D action adventure platformer
          </GridItem>
          <GridItem title='Clumsy Bat' image={clumsyImg} link='#/projects/clumsybat'>
            A 2D sidescroller arcade game on mobile
          </GridItem>
          <GridItem title='Game Jams' image={ggjImg} link='#/projects/gamejams'>
            Games developed while sleeping under a desk
          </GridItem>
          <GridItem title='Prototypes' image={''} link='#/projects/prototypes'>
            A technical look into Unity
          </GridItem>
          <GridItem title='Other work' image={''} link='#/projects/other'>
            Other programming-related projects
          </GridItem>
        </div>
      </div>
    )
  }
}
export default Projects;