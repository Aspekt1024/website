import React, { Component } from 'react'
import ProjectPageBase from './ProjectPageBase'
import ProjectInfo from '../../ProjectComponents/ProjectInfo';

const splashImg = require('../../../Images/prototypes/submarine.jpg')

class ProjectSubmarine extends Component {

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
      <ProjectPageBase title='Water Physics'>
        <ProjectInfo
          year='2017'
          github='/Aspekt1024/WaterPhysics'
          link='http://www.danscode.net/WaterPhysicsSubmarine.zip'
          linkText='Windows Build'
          team={this.state.team}
          >
          <img src={splashImg} alt='' />
        </ProjectInfo>
        
        <h4>About</h4>
        <p>
          A two-week experiment in water effects including waves, buoyancy and splash effects using Unity3D,
          with the objective of creating an intro and outro video for a YouTube Gaming channel.
        </p>

        <h4>Key Programming Features</h4>
        <p>
          The key takeaways from a programming perspecting involved:
          <ul>
            <li>Mesh-based physics calculations (no colliders)</li>
            <li>Vertex manipulation to create waves</li>
            <li>Input recording and playback</li>
            <li>Utilising the profiler</li>
          </ul>
        </p>
        
        <h4>Other Takeaways</h4>
        <p>
          Apart from the above learnings, this project taught me the fundamentals of the 3D art pipeline (using Blender),
          post-processing effects, and use of imported assets.
        </p>

        <h4>Demonstration</h4>
        <p>
          The video below shows the resulting sequences:
        </p>
        <iframe title='submarinesample'
          className='youtube-vid'
          src='https://www.youtube.com/embed/oM7RNBDR9rY'
          frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen='allowfullscreen'>
        </iframe>

      </ProjectPageBase>
    )
  }
}
export default ProjectSubmarine;