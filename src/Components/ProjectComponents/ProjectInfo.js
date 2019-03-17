import React, { Component } from 'react';

class ProjectInfo extends Component {

  render() {
    
    return (
      <div>
        <div className='project-info'>
          <div className='project-description'>
            {this.props.linkText != null ?
              <div className='project-detail'>
                <span className='project-detail-title'>Play:</span>
                <a href={this.props.link}>{this.props.linkText}</a>
              </div>
            :
              void 0
            }
            {this.props.downloadText != null ?
              <div className='project-detail'>
                <span className='project-detail-title'>Download:</span>
                <a href={this.props.downloadLink}>{this.props.downloadText}</a>
              </div>
            :
              void 0
            }
            {this.props.website != null ?
              <div className='project-detail'>
                <span className='project-detail-title'>Website:</span>
                <a href={'https://github.com' + this.props.website}>{this.props.websiteText}</a>
              </div>
            :
              void 0
            }
            {this.props.github != null ?
              <div className='project-detail'>
                <span className='project-detail-title'>Github:</span>
                <a href={'https://github.com' + this.props.github}>{this.props.github}</a>
              </div>
            :
              void 0
            }
            <div className='project-detail'>
              <span className='project-detail-title'>Year:</span>
              {this.props.year}
            </div>
            <div className='project-detail'>
              <span className='project-detail-title'>Team:</span>
              <div className='team-list'>
                {this.props.team.map(function(member, i){
                    return (
                      <p>{member}</p>
                    )
                })}
              </div>
            </div>
          </div>
          <div className='project-blurb'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
export default ProjectInfo;