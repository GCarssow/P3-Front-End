import React, { Component } from 'react'

fetchWorkouts = () => {

const apiURL = '';

  return fetch(apiURL)
    .then(response => response.json())
    .then(workout => {
      this.setState({workout,
      isCompanyLoaded:true})
      console.log('insidefetch',this.state.workout)
    }
  )
    .catch((err) => console.log('err', err))
}


var getPumpedArray = corny.data
    
    
var randomWorkout = getPumpedArray[Math.floor(Math.random() * getPumpedArray.length)];





class Daily extends Component {
  render() {
    return (
      
      <button classname='button' onClick={fetchWorkouts()}>
      Get a Random Workout!!
      </button>

  
      <ul className="daily"> 
              <li>Name: </li>
              <li>Equipment Needed:</li>
              <li>Workout:</li>
              <li>Time Required:</li>
              <li>Source:</li>
      </ul>
    )
  }
}

export default Daily;