import React, { Component } from 'react';
import ProjectPageBase from './ProjectPageBase';
import ProjectInfo from '../../ProjectComponents/ProjectInfo';
import ImgAnim from '../../ProjectComponents/ImgAnim';

const splashImg = require('../../../Images/chaostavern.png')

const editorImg = require('../../../Images/ctEditor.jpg')
const tavernGenStatic = require('../../../Images/taverngen.jpg')
const tavernGenAnimated = require('../../../Images/taverngen.gif')

const potionTutImg = require('../../../Images/ctPotionTutorial.jpg')
const swordTut1Img = require('../../../Images/ctSwordTutorial.jpg')
const swordTut2Img = require('../../../Images/ctSwordTutorial2.jpg')

const recipeImg = require('../../../Images/ctRecipeEditor.jpg')

class ProjectChaosTavern extends Component {

  constructor(props) {
    super(props)

    this.state = {
      team: [
        'Dragonbear Studios',
      ]
    }
  }

  render() {
    return (
      <ProjectPageBase title='Chaos Tavern'>
        <ProjectInfo
          year='2019 - 2020'
          team={this.state.team}
          website="https://chaostavern.com/"
          websiteText="chaostavern.com"
          >
          <img src={splashImg} alt='' />
        </ProjectInfo>

        <h3>About</h3>
        <p>
          A couch co-op tavern simulator about running an enchanted tavern - serving mythical creatures and adventurers in a fantasy world.
        </p>
        <p>
          Four underdog adventurers accidentally mortgage their souls against a cursed tavern. Frantically race to pay off your debts, learn new skills, and break the curse.
        </p>

        <iframe title='ChaosTavernTrailer'
          className='youtube-vid'
          src="https://www.youtube.com/embed/9CWMEeZtzco"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen='allowfullscreen'>
        </iframe>

        <h3>Key Programming Features</h3>
        <p>
          My role in Chaos Tavern as a Programmer was to take the codebase into a state where additional features and mechanics could be
          swapped in and out. This included refactoring many of the core components of the game, and introducing new systems to
          assist in creating events during gameplay.
        </p>
        <p>
          A few examples of the systems I created are:
          <ul>
            <li>Tavern Editor</li>
            <li>Crafting Editor</li>
            <li>Quest System</li>
            <li>Shop System</li>
            <li>Single Player Delegation</li>
          </ul>
        </p>

        <h4>Tavern Editor</h4>
        <p>

        </p>
        <ImgAnim static={editorImg} caption='Placing a table using the tavern editor' />

        <p>
          Points:
            Floor is auto generated based on walls.
            Snap to grid.
            Keybinds to move and rotate objects.
            Object placement validation.
        </p>
        <ImgAnim static={tavernGenStatic} animated={tavernGenAnimated} caption='Touching up the tavern in the editor' />

        <h4>Crafting Editor</h4>
        <p>
        </p>
        <ImgAnim static={recipeImg} />
        <ImgAnim static={swordTut1Img} smallImage={true} />

        <h4>Quest System</h4>
        <p>
          The quest system tied in with another system that allowed events to be flexibly sequenced into the gameplay.
          This allowed us to use quest-like events as tutorials for mechanics such as crafting. 
        </p>
        <ImgAnim static={potionTutImg} smallImage={true} caption='Potion tutorial - crafting potions for a group of adventurers' />
        <ImgAnim static={swordTut2Img} smallImage={true} caption='Enchanting tutorial - handing in the enchanted sword' />

      </ProjectPageBase>
    )
  }
}
export default ProjectChaosTavern;