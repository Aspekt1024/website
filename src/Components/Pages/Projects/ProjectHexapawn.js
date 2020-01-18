import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'
import ProjectInfo from '../../ProjectComponents/ProjectInfo';

const splashImg = require('../../../Images/prototypes/hexapawn.png')

class ProjectHexapawn extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      team: [
        'Dan Szabo',
      ]
    }
  }
  
  render() {
    return (
      <ProjectPageBase title='Hexapawn'>
        <ProjectInfo
          year='2019'
          github='/Aspekt1024/Hexapawn'
          link='http://hexapawn.s3-website-ap-southeast-2.amazonaws.com'
          linkText='WebGL'
          team={this.state.team}
          >
          <img src={splashImg} alt='' />
        </ProjectInfo>
        
        <h4>About</h4>
        <p>
          This prototype was completed in two afternoons, and demonstrates a simple machine learning
          algorithm.
        </p>

        <h4>Rules</h4>
        <p>
          The Player and the AI take turns moving one pawn each turn. Pawns can move forward one
          space if the tile is free, or diagonally forward to capture an opposing piece.
        </p>

        <h4>Win Condition</h4>
        <p>
          There are three win conditions:
          <ol>
            <li>The opponent has no possible moves</li>
            <li>A pawn is moved to the opposite end of the board</li>
            <li>All opponent pawns have been captured</li>
          </ol>
        </p>

        <h4>AI</h4>
        <p>
          The AI was given no prior information apart from its possible moves for a given 
          board state. When the AI wins, it takes the moves it played and adds to their weight
          to increase the chance of making that set of moves again. If the AI loses, it decreases
          the weight of the moves it made during the game, reducing the chance of making the same
          mistakes.
        </p>
        <p>
          The AI is not perfect, by design. This is a modification of
          the <a href="https://en.wikipedia.org/wiki/Hexapawn">original game</a>,
          which uses an analogue system.
        </p>
        <p>
          The AI can handle different board sizes (for future implementations).
        </p>

      </ProjectPageBase>
    )
  }
}
export default ProjectHexapawn;