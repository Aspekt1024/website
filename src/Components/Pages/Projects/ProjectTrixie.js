import React, { Component } from 'react';
import ProjectPageBase from './ProjectPageBase';
import ProjectInfo from '../../ProjectComponents/ProjectInfo';

import ImgAnim from '../../ProjectComponents/ImgAnim';

const aiImg = require('../../../Images/trixieai.png')
const trixieImg = require('../../../Images/trixie1.png')

const pcStatic = require('../../../Images/playercontroller2d.jpg')
const pcAnimated = require('../../../Images/playercontroller2d.gif')
const trixieStatic = require('../../../Images/trixie.jpg')
const trixieAnimated = require('../../../Images/trixie.gif')
const layerStatic = require('../../../Images/trixieLayers.jpg')
const layerAnimated = require('../../../Images/trixieLayers.gif')
const parallaxStatic = require('../../../Images/trixieParallax.jpg')
const parallaxAnimated = require('../../../Images/trixieParallax.gif')
const aiAnimated = require('../../../Images/trixieAi.gif')

class ProjectTrixie extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      team: [
        'Dan Szabo - Programmer',
        'Tom Garden - Artist',
      ]
    }
  }

  render() {
    return (
      <ProjectPageBase title='Trixie'>
        <ProjectInfo
          year='2018'
          github='/Aspekt1024/Trixie'
          team={this.state.team}
          >
          <img src={trixieImg} alt='' />
        </ProjectInfo>

        <h3>About</h3>
        <p>
          Trixie is a 2D adventure platformer developed in Unity3D.
          This ongoing project started in 2018 as a two-person team (one artist
          and one programmer).
        </p>

        <h3>Key Programming Features</h3>
        <p>
          The programming challenges in Trixie focuses primarily on the following systems:
          <ul>
            <li>Player Controller</li>
            <li>AI System</li>
            <li>Level Editor</li>
          </ul>
        </p>

        <h4>Player Controller</h4>
        <p>
          The player controller for Trixie was extended from a <a href='#/projects/playercontroller'>2D player controller</a> that
          I developed as a separate prototype, designed for use in any 2D game. Additional features such as items, abilities, and
          object and npc interactions specific to the game were added.
        </p>
        <p>
          The image below shows the prototype in action, unlocking abilities and utilising them.
        </p>
        <ImgAnim static={pcStatic} animated={pcAnimated} />
        <p>
          The controller was then imported into this project. By updating the animator, adding additional abilities,
          and adjusting the physics properties of the controller to fit the game, the player controller was ready
          to go. The image below shows this in action.
        </p>
        <ImgAnim static={trixieStatic} animated={trixieAnimated} />

        <h4>AI System</h4>
        <p>
          The AI system was built from the ground up using GOAP
          (<a href="https://gamedevelopment.tutsplus.com/tutorials/goal-oriented-action-planning-for-a-smarter-ai--cms-20793" target="_blank" rel="noopener noreferrer">
            Goal Oriented Action Planning
          </a>).
          This is essentially a state machine, where transitions between states don't exist as hard coded paths,
          and are instead calculated at runtime using a lowest cost algorithm.
        </p>
        <p>
          The image below shows an enemy unit that's trying to attack Trixie. The action plan is shown on the right, in the custom editor
          to allow us to see the inner working of the AI. Actions are executed from the bottom up, until it achieves the allocated goal.
          Black text represents the action's effects (i.e. MoveToTarget will ensure we can both 'see' and 'shoot' the target), green
          shows prerequisites for an action to run that are met, and red are prerequisites that are not met.
        </p>
        <p>
          The enemy can see the target, but the trajectory calculation tells the enemy if it shoots, it will hit the platform, so the
          enemy needs to move closer to the target, around the platform.
        </p>
        <ImgAnim static={aiImg} animated={aiAnimated} largeImage={true} hidePlay={true} />

        <h4>Level Editor</h4>
        <p>
          The primary focus on level editing was to allow our artist, who was new to Unity, to develop
          their own scenes in the editor. This enabled them to easily interact with their art as it would be seen in-game.
        </p>
        <p>
          Simple effects such as parallax could be lined up in the editor by setting the appropriate values on groups of sprites
          and moving the main camera around.
        </p>
        <ImgAnim static={parallaxStatic} animated={parallaxAnimated} />
        <p>
          Concepts such as sprite layers and sorting orders were made easier to visualise and manage by customising the editor window
          to ensure each sprite was assigned a layer, with reporting to show what had been missed. 
        </p>
        <ImgAnim static={layerStatic} animated={layerAnimated} />
        <p>
          Environmental events were also made possible by providing prefabs that could be dragged into the scene.
          This involved customised editors to set the event type, characteristics such as spawning enemies or starting dialogue,
          locking the camera (e.g. for an arena battle), and triggering custom scripts on completion.
        </p>  

      </ProjectPageBase>
    )
  }
}
export default ProjectTrixie;