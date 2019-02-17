import React, { Component } from 'react';
import GridItem from '../Grid/GridItem';

const placeholder = require('../../Images/placeholder.png')

class Home extends Component {
  render() {
    return (
      <div className='page'>
        <h1>Home</h1>
        <div className='grid'>
          <GridItem title='Projects' image={placeholder} link='#/projects'>
            <p>Games and projects Ive worked on</p>
          </GridItem>
          <GridItem title='About Me' image={placeholder} link='#/about'>
            <p>A little bit about who I am</p>
          </GridItem>
          <GridItem title='Contact' image={placeholder} link='#/contact'>
            <p>Get in touch!</p>
          </GridItem>
        </div>
      </div>
    )
  }
}
export default Home;