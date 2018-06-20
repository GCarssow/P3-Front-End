import React, { Component } from 'react';

import Header from './components/Header'
import Daily from './components/Daily'
import Footer from './components/Footer'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Daily />
        <Footer />
      </div>
    );
  }
}

export default App;