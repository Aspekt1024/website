import React, { Component } from 'react';
import ProjectPageBase from './ProjectPageBase';
import ProjectInfo from '../../ProjectComponents/ProjectInfo';

const splashImg = require('../../../Images/clumsyBat/clumsy.png')
const cbNodeImage = require('../../../Images/clumsyBat/cbNodeEditor.png')

class ProjectClumsy extends Component {

  constructor(props){
    super(props)

    this.state = {
      team: [
        'Dan Szabo - Programmer',
        'Scott Robinson - Artist',
      ]
    }
  }

  render() {
    return (
      <ProjectPageBase title='Clumsy Bat'>
        <ProjectInfo
          year='2016'
          github='/Aspekt1024/ClumsyBat'
          link='https://play.google.com/store/apps/details?id=com.BraveLlama.ClumsyBat'
          linkText='Google Play'
          team={this.state.team}
          >
          <img src={splashImg} alt='' />
        </ProjectInfo>

        <h3>About</h3>
        <p>
          Clumsy bat is a cute and playful 2D side-scrolling avoidance game. In concept, Clumsy Bat is
          a spin-off of Flappy Bird, with added abilities, obstacles, and bosses. In this 2D sidescroller
          adventure, players brave the perilous caves full of spikes, vision impairing mushrooms and creepy
          spiders, and collect arcane essences from moths scattered throughout the cave. Find and solve
          puzzles to unlock new abilities you'll need to escape safely!
        </p>
        <p>
          Clumsy Bat is a side-scrolling avoidance game for mobile, with simple touch input controls.
          This was the first game I made using Unity, providing a solid foundation for some key game systems.
          It was developed between several projects which gave an excellent insight into the requirements of
          structuring long-term projects, how to maintain old code, and how to keep code maintainable.
        </p>

        <h3>Key Programming Features</h3>
        <p>
          While being an introduction into Unity involving UI, game modes and touch input,
          this game delved deeper into custom editors to assist the game design process.
          Specifically:
        </p>
        <ul>
          <li><strong>Node-based AI Editor</strong>: deep-diving into custom editors</li>
          <li><strong>2D Level Editor</strong>: customising the scene view</li>
        </ul>

        <h4>Node-based AI Editor</h4>
        <p>
          Clumsy Bat involves periodic boss encounters, with pseudo-scripted behaviour.
          Inspired by the Unreal Engine 4 blueprint system, the Node-based AI editor was build from
          scratch using the Unity Editor API.
        </p>
        <p>
          The image below shows an example of the first boss-fight, with three block types:
          <ol>
            <li>Green: Sub-processes containing grouped logic (user defined)</li>
            <li>Blue: Functional blocks that perform a specific action</li>
            <li>Purple: Event blocks that trigger or react to an event</li>
          </ol>
        </p>
        <img className='large-image' src={cbNodeImage} alt='' />

        <p>
          The video below shows the 'follow player' sub-process in-game. 
          The editor shows which blocks are currently active, making debugging much easier.
        </p>
        
        <iframe title='clumsynodeeditor'
          className='youtube-vid'
          src="https://www.youtube.com/embed/Ll9lIoFRKs8"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen='allowfullscreen'>
        </iframe>

        <h4>2D Level Editor</h4>
        <p>
          Clumsy Bat required a way to easily produce and test levels. The level editor 
          is a customised Scene View that listens for key input, making it possible to easily:
          <ul>
            <li>Add to the cave at any point</li>
            <li>Modify cave pieces to pre-defined shapes</li>
            <li>Add collectibles and obstacles, and modify their attributes</li>
            <li>Show telegraphs (e.g. where a spike will land)</li>
            <li>Adding triggerable events</li>
          </ul>
        </p>

        <p>
          The video below shows the creation of part of a level from scratch, and a test playthrough.
        </p>
        <iframe title='clumsyleveleditor'
          className='youtube-vid'
          src="https://www.youtube.com/embed/o3DdNMrAQzc"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen='allowfullscreen'>
        </iframe>

      </ProjectPageBase>
    )
  }
}
export default ProjectClumsy;