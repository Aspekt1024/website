import React, { Component } from 'react';

class ProjectPageBase extends Component {
  render() {
    return (
      <div className='page'>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  }
}
export default ProjectPageBase;