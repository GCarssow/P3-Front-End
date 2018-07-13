import React, { Component } from "react";

class RandomWorkout extends Component {
  constructor() {
    super();
    this.state = {
      workout: []
    };
  }
  getWorkout = () => {
    const apiURL = 'https://workouts-p3.herokuapp.com/wod'
    return fetch(apiURL)
      .then(results => results.json())
      .then(data => {
        console.log('data',data)
        var randomWorkout = data.wod[Math.floor(Math.random() * data.wod.length)]
        this.setState({ workout: randomWorkout })
        console.log("state", this.state)
    }  
  )
} 
  
  render() {
    return (
      <div>
        <button onClick={this.getWorkout}>Get a Random Workout</button>
        <h3>Your workout for today is...</h3>
        <ul>
          <li>Name: {this.state.workout.name}</li>
          <li>Equipment Needed: {this.state.workout.equipment_needed}</li>
          <li>The Workout: {this.state.workout.the_workout}</li>
          <li>Time Needed: {this.state.workout.time_required}</li>
          <li>Source: {this.state.workout.source}</li>
        </ul>
      </div>
    );
  }
}

export default RandomWorkout;
