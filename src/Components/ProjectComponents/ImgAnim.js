import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class ImgAnim extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
    }
  }

  render() {
    var img = this.state.isClicked ? this.props.animated : this.props.static

    return (
      <div>
        <div className={this.getClassName()}>
          <img src={img} alt='' onClick={this.handleClick} />
          { this.state.isClicked || this.props.animated == null || this.props.hidePlay ?
            void 0
          :
            <span className='image-animated-overlay' onClick={this.handleClick}>
              <div className='image-animated-play'>
                <p><FontAwesomeIcon className='icon' icon={faPlay} /></p>
              </div>
            </span>
          }
        </div>
        { this.props.caption != null ?
          <div className='image-caption'>{this.props.caption}</div>
        :
          void 0
        }
      </div>
    )
  }

  handleClick = () => {
    if (this.props.animated == null) {
      return
    }
    this.setState({ isClicked: !this.state.isClicked })
  }

  getClassName = () => {
    var name = 'image-animated'
    if (this.props.largeImage) {
      name += ' image-animated-large'
    } else if (this.props.smallImage) {
      name += ' image-animated-small'
    }
    if (this.props.autoHeight) {
      name += ' img-auto-height'
    }
    if (this.props.animated != null) {
      name += ' pointer'
    }
    return name
  }
}
export default ImgAnim;