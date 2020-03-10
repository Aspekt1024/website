import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'
import ProjectInfo from '../../ProjectComponents/ProjectInfo'

class ProjectGOAP extends Component {

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
      <ProjectPageBase title='GOAP AI System'>
        <ProjectInfo 
          year='2017 & 2019'
          github='/Aspekt1024/LittleDrones'
          team={this.state.team}
        />
        <p>
          <strong>Under Construction</strong>
        </p>
      </ProjectPageBase>
    )
  }
}
export default ProjectGOAP;