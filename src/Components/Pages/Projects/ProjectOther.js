import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'

class ProjectOther extends Component {
  render() {
    return (
      <ProjectPageBase title='Other Projects'>
        <p>
          Under Construction
        </p>
        <p>
          Projects not related directly to game development, but I want to share anyway
        </p>
        <ul>
          <li>Ciena Config Gen</li>
          <li>Exchange layout and patchcord calculator</li>
          <li>CICD and Kubernetes</li>
          <li>AWS, apps and this website</li>
          <li>etc...</li>
        </ul>

      </ProjectPageBase>
    )
  }
}
export default ProjectOther;