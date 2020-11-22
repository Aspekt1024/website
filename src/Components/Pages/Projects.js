import React, { Component } from 'react';
import GridItem from '../Grid/GridItem';

const ctImg = require('../../Images/innchanted/banner-logo.jpg')
const trixieImg = require('../../Images/trixie/trixie1.png')
const trixieImgAnimated = require('../../Images/trixie/trixie.gif')
const cbStatic = require('../../Images/clumsyBat/cbtitlestatic.jpg')
const cbAnimated = require('../../Images/clumsyBat/cbtitleanimated.gif')
const ggjImg = require('../../Images/gamejam/ggjlogo.png')
const d20Img = require('../../Images/prototypes/d20rollNat20.jpg')
const d20ImgAnimated = require('../../Images/prototypes/d20rollNat20.gif')

class Projects extends Component {

  render() {
    
    return (
      <div className='page'>
        <h1>Projects</h1>
        <div className='grid'>
          <GridItem title='Innchanted' image={ctImg} link='#/projects/innchanted'>
            A fun and frantic co-operative multiplayer game about running a fantasy inn!
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
            Some prototypes and tools in Unity that were really fun to make
          </GridItem>
          {/* <GridItem title='Other work' image={''} link='#/projects/other'>
            Other programming-related projects
          </GridItem> */}
        </div>
      </div>
    )
  }
}
export default Projects;