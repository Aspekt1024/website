import React, { Component } from 'react';
import ProjectPageBase from './ProjectPageBase';
import ProjectInfo from '../../ProjectComponents/ProjectInfo';
import ImgAnim from '../../ProjectComponents/ImgAnim';
import Accordion from '../../Accordion/Accordion';
import AccordionItem from '../../Accordion/AccordionItem';

import { faCogs,  } from '@fortawesome/free-solid-svg-icons'

const splashImg = require('../../../Images/innchanted/mainmenu.jpg')

const mapEditorImg = require('../../../Images/innchanted/map-editor.jpg')
const dayMatrixImg = require('../../../Images/innchanted/day-matrix.jpg')

const potionTutImg = require('../../../Images/innchanted/ctPotionTutorial.jpg')

const choiceStaticImg = require('../../../Images/innchanted/activities.jpg')
const choiceAnimImg = require('../../../Images/innchanted/activities.gif')

const recipeImg = require('../../../Images/innchanted/ctRecipeEditor.jpg')

const shopImg = require('../../../Images/innchanted/ShopFlow.jpg')

const helperStaticImg = require('../../../Images/innchanted/helper.jpg')
const helperAnimImg = require('../../../Images/innchanted/helper.gif')



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
      <ProjectPageBase title='Innchanted'>
        <ProjectInfo
          year='2019 - 2020'
          team={this.state.team}
          link="https://store.steampowered.com/app/1369720/Innchanted/"
          linkText="PAX Demo"
          website="https://innchanted.com/"
          websiteText="innchanted.com"
          >
          <img src={splashImg} alt='' className='splash-image' />
        </ProjectInfo>

        <h3>About</h3>
        <p>
          Innchanted is a co-op adventure where you discover magical potions, serve otherworldly guests, and pacify monsters.
          Gather your party and journey on a quest to overcome the evil Wizard – your landlord!
        </p>

        <iframe title='innchanted-pax-gameplay-trailer' width="560" height="315" src="https://www.youtube.com/embed/S2Of1An1fXQ" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className='youtube-vid2'
          allowfullscreen>
        </iframe>

        <h3>Key Programming Tasks</h3>
        <p>
          Taking on the Lead Programmer role of Innchanted involved architecting and maintaining the core of the codebase.
          This involved creating systems to allow new features and customisability of the game flow.
        </p>
        <p>
          Some examples of these systems are included in the dropdowns below.
        </p>

        <Accordion>
          <AccordionItem title='1. AI System' icon={faCogs}>
            <p>
              AI is driven by a robust, scalable GOAP (Goal Oriented Action Planning) system. Actions and Goals can be safely switched out at
              any point during gameplay for full control over AI behaviour. It allows in-game helpers to assist players with gameplay tasks, and
              also controls monster behaviour. 
            </p>
            <p>
               The below example shows a player delegating the helper AI. This system was designed for single player mode to simulate playing
               and communicating with another player.
              <ImgAnim static={helperStaticImg} animated={helperAnimImg} smallImage={true} autoHeight={true} caption='AI helper assists running the inn' />
            </p>
            <p>
              In the example above, the AI helper is instructed to cook a steak for a customer. The player interrupts the cooking process, and
              the AI immediately corrects this by cooking another steak (prioritising ingredients on tables). Before the steak is finished cooking, the
              AI is instructed to defend the inn from an attacking monster. The AI promptly runs off to get a weapon and attacks the monster.
            </p>
          </AccordionItem>
          <AccordionItem title='2. Editors' icon={faCogs}>
            <p>
              The addition of custom editors in Unity allow for more rapid prototyping and gameplay tweaks without
              the need to modify code. Some examples are shown below.
            </p>
            <p>
              <h3>Level configuration</h3>
              The level config editor tool enables selection of attributes for each individual phase of gameplay, including maps, events,
              dialogue and NPCs.
              <ImgAnim static={dayMatrixImg} smallImage={true} autoHeight={true} caption='Toggles for controlling level configuration' />
            </p>
            <p>
              <h3>Map editor</h3>
              The map editor allows for rapid prototyping of playable maps so designers can place objects with predefined rules.
              <ImgAnim static={mapEditorImg} caption='Placing the mimic chest using the map editor' />
            </p>
            <p>
              <h3>Recipe editor</h3>
              The recipe editor manages how objects can be combined at each individual crafting station
              <ImgAnim static={recipeImg} caption="Defining recipes for the cauldron" />
            </p>
          </AccordionItem>
          <AccordionItem title='3. Gameplay Systems' icon={faCogs}>
            <p>
              <h3>Shop system</h3>
              All systems in Innchanted are typically self-contained (aisde from a dependency on data). The shop system is a
              simple example of this, where logic and UI are separated, such that a simple call to Shop.Open() will handle
              the logical selection of available items and display the UI.
              <ImgAnim static={shopImg} largeImage={true} autoHeight={true} caption='Shop system workflow' />
            </p>
            <p>
              <h3>Activities</h3>
              Players make meaninful choices that affect gameplay. The activity system handles gameplay tasks that offer
              unique choices for players to make, impacting the story or offering immediate effects.
              <ImgAnim static={choiceStaticImg} animated={choiceAnimImg} autoHeight={true} caption='Night activity selection' />
            </p>
            <p>
              <h3>Quest system</h3>
              Quests are tutorial-like events to provide crafting and enchanting challenges outside of the main gameplay.
              They are flexibly sequenced into the gameplay system using the Level config editor (mentioned in Editors above),
              and usually include custom dialogue to assist players or provide story context.
              <ImgAnim static={potionTutImg} smallImage={true} caption='Crafting potions for a group of adventurers' />
            </p>
          </AccordionItem>
        </Accordion>
      </ProjectPageBase>
    )
  }
}
export default ProjectChaosTavern;