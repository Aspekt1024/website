import React, { Component } from 'react';
import GridItem from '../Grid/GridItem';

const oriTree = require('../../Images/OriTree.jpg')
const oriEpic = require('../../Images/840030985_preview_image.png')
const oriScared = require('../../Images/Ori-and-the-Blind-Forest-6.jpg')

class Home extends Component {
  render() {
    return (
      <div className='page'>
        <h1>Home</h1>
        <div className='grid'>
          <GridItem title='Projects' image={oriTree} link='#/projects'>
            <p>Games and projects Ive worked on</p>
          </GridItem>
          <GridItem title='About Me' image={oriEpic} link='#/about'>
            <p>A little bit about who I am</p>
          </GridItem>
          <GridItem title='Contact' image={oriScared} link='#/contact'>
            <p>Get in touch!</p>
          </GridItem>
        </div>
      </div>
    )
  }
}
export default Home;