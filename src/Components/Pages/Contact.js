import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className='page'>
        <h1>Contact</h1>
        <div className='contact-card'>
          <table>
            <tbody>
              <tr>
                <td>Twitter:</td>
                <td><a href='https://twitter.com/aspekt1024'>@aspekt1024</a></td>
              </tr>
              <tr>
                <td>LinkedIn:</td>
                <td><a href='https://www.linkedin.com/in/dan-szabo-02ab952b/'>Dan Szabo</a></td>
              </tr>
              <tr>
                <td>GitHub:</td>
                <td><a href='https://github.com/Aspekt1024'>Aspekt1024</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default Contact;