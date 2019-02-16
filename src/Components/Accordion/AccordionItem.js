import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'


class AccordionItem extends Component {

  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  }

  render() {
    return (
      <div className='accordion-item'>

        <div className='accordion-header' onClick={this.onClick}>
          <div className='accordion-indicator'>
            <span><FontAwesomeIcon icon={this.props.visible ? faChevronDown : faChevronRight } /></span>
          </div>
          <p>
            <FontAwesomeIcon className='icon' icon={this.props.icon} /> {this.props.title}
          </p>
        </div>
        <div id='test' className={this.props.visible ? 'content' : 'content content-hidden' }>
          {this.props.children}
        </div>
      </div>
    )
  }

  onClick = () => {
      this.props.onClick(this.props.title)
  }
}
export default AccordionItem