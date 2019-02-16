import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main'
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
