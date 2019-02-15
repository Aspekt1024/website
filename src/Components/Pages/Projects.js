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
          <GridItem 
            title='Test'
            image={oriTree}
            caption='test text'
          />

          <GridItem 
            title='Test'
            image={tallImage}
            caption='test text'
          />

          <GridItem 
            title='Test'
            image={oriEpic}
            caption='test text'
          />
          
          <GridItem 
            title='Test'
            image={oriScared}
            caption='test text'
          />
          
          <GridItem 
            title='Test'
            image={longImage}
            caption='test text'
          />
        </div>
      </div>
    )
  }
}
export default Projects;