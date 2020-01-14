import React, { Component } from 'react';
import GridItem from '../Grid/GridItem';

const ctImg = require('../../Images/chaostaverntitle.png')
const trixieImg = require('../../Images/trixie1.png')
const trixieImgAnimated = require('../../Images/trixie.gif')
const cbStatic = require('../../Images/cbtitlestatic.jpg')
const cbAnimated = require('../../Images/cbtitleanimated.gif')
const ggjImg = require('../../Images/ggjlogo.png')
const d20Img = require('../../Images/d20rollNat20.jpg')
const d20ImgAnimated = require('../../Images/d20rollNat20.gif')

class Projects extends Component {

  render() {
    
    return (
      <div className='page'>
        <h1>Projects</h1>
        <div className='grid'>
          <GridItem title='Chaos Tavern' image={ctImg} link='#/projects/chaostavern'>
            A fun and frantic co-operative multiplayer game about running a fantasy tavern!
          </GridItem>
          <GridItem title='Trixie' image={trixieImg} animatedImage={trixieImgAnimated} link='#projects/trixie'>
            A 2D action adventure platformer
          </GridItem>
          <GridItem title='Clumsy Bat'
            image={cbStatic} animatedImage={cbAnimated}
            link='#/projects/clumsybat'
          >
            A 2D sidescroller arcade game on mobile
          </GridItem>
          <GridItem title='Game Jams' image={ggjImg} link='#/projects/gamejams'>
            Games developed while sleeping under a desk
          </GridItem>
          <GridItem title='Prototypes' image={d20Img} animatedImage={d20ImgAnimated} link='#/projects/prototypes'>
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