import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-content'>
          <table className='footer-table'>
            <tbody>
              <tr>
                <td>Twitter:</td>
                <td><a href='https://twitter.com/aspekt1024'>@aspekt1024</a></td>
              </tr>
              <tr>
                <td>GitHub:</td>
                <td><a href='https://github.com/Aspekt1024'>Aspekt1024</a></td>
              </tr>
              <tr>
                <td>LinkedIn:</td>
                <td><a href='https://www.linkedin.com/in/dan-szabo-02ab952b/'>Dan Szabo</a></td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><a href='mailto:aspektgames@gmail.com'>aspektgames@gmail.com</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default Footer;
    