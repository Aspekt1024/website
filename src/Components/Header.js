import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
    render() {
      return (
        <div className="header">
          <div className="header-content">
            <h1 className="header-text">
              Dan Szabo
            </h1>
            <p>
              Game Developer / Engineer
            </p>
          </div>
          <Navbar />
        </div>
      )
    }
}
export default Header;
    