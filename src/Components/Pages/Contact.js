import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
  render() {
    return (
      <div className='page'>
        <h1>Contact</h1>

        <div className='contact-grid'>
          {this.contactItem('https://twitter.com/aspekt1024', 'Twitter', faTwitter, '@aspekt1024')}
          {this.contactItem('https://github.com/Aspekt1024', 'GIthub', faGithub, 'Aspekt1024')}
          {this.contactItem('https://www.linkedin.com/in/dan-szabo-02ab952b/', 'LinkedIn', faLinkedin, 'dan-szabo-02ab952b')}
          {this.contactItem('mailto:aspektgames@gmail.com', 'Email', faEnvelopeOpenText, 'aspektgames@gmail.com')}
        </div>
      </div>
    )
  }

  contactItem = (link, title, icon, linkText) => {
    return (
      <div className='grid-item'>
        <a href={link}>
          <span className='contact-grid-title'>{title}</span>
          <div className='contact-grid-icon'><FontAwesomeIcon icon={icon} /></div>
          <div className='contact-grid-link'>{linkText}</div>
        </a>
      </div>)
  }
}
export default Contact;