import React, { Component } from 'react';
import AccordionItem from './AccordionItem';

class Accordion extends Component {

  constructor(props) {
    super(props)

    const openSections = {}

    this.state = {
      openSections 
    }
  }

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this

    return (
      <div className='accordion'>
        {children.map(child => (
          child.props.hidden ?
            void 0
          :
            (
              <AccordionItem
                visible={!!openSections[child.props.title]}
                title={child.props.title}
                icon={child.props.icon}
                isOpen={child.props.isOpen}
                onClick={onClick}
              >
                {child.props.children}
              </AccordionItem>
            )))}
      </div>
    )
  }

  onClick = title => {
    const isVisible = !!this.state.openSections[title];

    this.setState({ openSections: {
      [title] : !isVisible
    }})
  }
}
export default Accordion