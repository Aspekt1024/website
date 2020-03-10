import React, { Component } from 'react';

class ProjectPageBase extends Component {


  componentDidMount = () => {
    window.scrollTo(0, 0)
  }

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