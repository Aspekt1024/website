import React, { Component } from 'react';
import ProjectPageBase from './ProjectPageBase';

class ProjectClumsy extends Component {
  render() {
    return (
      <ProjectPageBase title='Clumsy Bat'>
        <p>Editor Components:</p>
        <ul>
          <li>2D Level Editor</li>
          <li>Node-Base Graph Editor</li>
        </ul>

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