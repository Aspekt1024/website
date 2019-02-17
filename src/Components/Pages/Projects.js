import React, { Component } from 'react';
import GridItem from '../Grid/GridItem';

const oriTree = require('../../Images/OriTree.jpg')
const oriEpic = require('../../Images/840030985_preview_image.png')
const oriScared = require('../../Images/Ori-and-the-Blind-Forest-6.jpg')
const longImage = require('../../Images/make this.png')
const tallImage = require('../../Images/tallImage.png')

class Projects extends Component {

  render() {
    
    return (
      <div className='page'>
        <h1>Projects</h1>
        <div className='grid'>
          <GridItem title='Project 1' image={oriTree} link='#/projects/1'>
            project 1
          </GridItem>
          <GridItem title='Project 2' image={oriEpic}>
            project 2
          </GridItem>
          <GridItem title='Project 3' image={oriScared}>
            project 3
          </GridItem>
          <GridItem title='Project 4' image={longImage}>
            project 4
          </GridItem>
          <GridItem title='Project 5' image={tallImage}>
            project 5
          </GridItem>
        </div>
      </div>
    )
  }
}
export default Projects;