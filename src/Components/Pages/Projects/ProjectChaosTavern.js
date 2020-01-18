import React, { Component } from 'react';
import ProjectPageBase from './ProjectPageBase';
import ProjectInfo from '../../ProjectComponents/ProjectInfo';
import ImgAnim from '../../ProjectComponents/ImgAnim';

const splashImg = require('../../../Images/chaosTavern/chaostavern.png')

const editorImg = require('../../../Images/chaosTavern/ctEditor.jpg')
const tavernGenStatic = require('../../../Images/chaosTavern/taverngen.jpg')
const tavernGenAnimated = require('../../../Images/chaosTavern/taverngen.gif')

const potionTutImg = require('../../../Images/chaosTavern/ctPotionTutorial.jpg')
const swordTut1Img = require('../../../Images/chaosTavern/ctSwordTutorial.jpg')
const swordTut2Img = require('../../../Images/chaosTavern/ctSwordTutorial2.jpg')

const recipeImg = require('../../../Images/chaosTavern/ctRecipeEditor.jpg')

const shopImg = require('../../../Images/chaosTavern/ShopFlow.jpg')
const delegationImg = require('../../../Images/chaosTavern/ctDelegation.jpg')



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
          <ol>
            <li>Tavern Editor</li>
            <li>Crafting Editor</li>
            <li>Quest System</li>
            <li>Shop System</li>
            <li>Delegation Mode</li>
          </ol>
        </p>

        <h4>1. Tavern Editor</h4>
        <p>
          The Tavern Editor was the first system I worked on in Chaos Tavern. I created an editor window that allowed users to quickly populate
          the tavern with objects (both interactive and non-interactive such as crafting stations or walls respectively).
        </p>
        <ImgAnim static={editorImg} caption='Placing a table using the tavern editor' />
        <p>
          A few design rules were put in place:
        </p>
        <ul>
          <li>
            Taverns need to be loaded from a file at runtime
            <ul>
              <li>Floors are auto-generated based on wall and door position</li>
              <li>Item unlocks and upgrades obey the game data</li>
              <li>Taverns can clean up after themselves</li>
            </ul>
          </li>
          <li>
            Objects fit on a grid
            <ul>
              <li>Objects snap to the grid and can be rotated with keypresses</li>
              <li>Existing objects can be repositioned on the grid</li>
            </ul>
          </li>
          <li>
            Objects cannot overlap
            <ul>
              <li>Creating new objects involved custom editors to quickly create grid placement maps</li>
              <li>Object placement is validated, with visual feedback</li>
            </ul>
          </li>
          <li>
            The tavern must fit within the camera bounds during gameplay
            <ul>
              <li>Visual feedback show the viewing field for min and max aspect ratios</li>
              <li>Custom editors allow adjustment of the game camera</li>
            </ul>
          </li>
        </ul>
        <ImgAnim static={tavernGenStatic} animated={tavernGenAnimated} caption='Touching up the tavern in the editor' />

        <h4>2. Crafting Editor</h4>
        <p>
          Crafting is a key mechanic in Chaos Tavern. introducing the crafting editor to the team allowed us to quickly
          create, modify and delete crafting rules specific to each type of crafting station.
        </p>
        <ImgAnim static={swordTut1Img} smallImage={true} caption="Red potion + blue potion + sword = enchanted sword!" />
        <p>
          For example, a cooking station could produce spiced steaks, while the cauldron can mix potions or be used to
          enchant swords based on the recipes in the image below:
        </p>
        <ImgAnim static={recipeImg} caption="Defining recipes for the cauldron" />

        <h4>3. Quest System</h4>
        <p>
          The quest system tied in with another system that allowed events to be flexibly sequenced into the gameplay.
          This allowed us to use quest-like events to create tutorials for mechanics such as crafting. 
        </p>
        <ImgAnim static={potionTutImg} smallImage={true} caption='Potion tutorial - crafting potions for a group of adventurers' />
        <ImgAnim static={swordTut2Img} smallImage={true} caption='Enchanting tutorial - handing in the enchanted sword' />

        <h4>4. Shop System</h4>
        <p>
          Players can purchase items at specific points in Chaos Tavern. This ties in heavily with progression in the story,
          items that have already been purchased, and other pieces of game data.
        </p>
        <p>
          The shop system uses the ShopManager as the entry point for all shop actions (setup or update the shop, and purchase items).
          On successfully purchasing an item, the ShopManager modifies the game data (GameManager.Data.Persistent.PurchasedData),
          and updates the shop. This method allows the shop logic to be separated from the game logic, which only needs to OpenShop()
          at specific events.
        </p>
        <ImgAnim static={shopImg} largeImage={true} autoHeight={true} caption='Shop system workflow' />

        <h4>5. Delegation Mode</h4>
        <p>
          To allow for a more interesting single player option, players are given the option to delegate one of the main characters
          that aren't being controlled by another player. The two critical parts of allowing this mechanic were:
          <ul>
            <li>
              Allowing an AI controller to move the character and perform actions
              <ul>
                <li>the player controller was solidified to accept direct commands</li>
                <li>interactive objects were solidified to provide programmatic feedback</li>
              </ul>
            </li>
            <li>
              Keeping the game state clean
              <ul>
                <li>Allowing additional players to join at any time and take control of the delegated character</li>
                <li>Retaining the delegation cursor state and position throughout menus</li>
              </ul>
            </li>
          </ul>
        </p>
        <ImgAnim static={delegationImg} smallImage={true} caption='Delegating potion delivery for increased efficiency!' />

      </ProjectPageBase>
    )
  }
}
export default ProjectChaosTavern;