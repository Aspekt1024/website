import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
