import React, { Component } from 'react';

import Header from './components/Header'
import RandomWorkout from './components/RandomWorkout'
import AddWorkout from './components/AddWorkout'

import AddExercise from './components/AddExercise'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RandomWorkout />
        <AddWorkout />
        <AddExercise />
      </div>
    );
  }
}

export default App;