import React, { Component } from 'react'

class AddWorkout extends Component {

constructor(props) {
  super(props);
  this.state = {
          workoutName: '',
          equipmentNeeded: '',
          workoutDescription: '',
          timeNeeded: '',
          source: ''
}}

post = (data) => {
  console.log('data', data)

const url = `https://workouts-p3.herokuapp.com/wod`

  let content = {
    name: data.workoutName,
    equipment_needed: data.equipmentNeeded,
    the_workout: data.workoutDescription,
    time_required: data.timeNeeded,
    source: data.source,
    };

  console.log('content', content)

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(content),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
})
  .then(resp => resp.json())
  .then(wod => {
    console.log('response', wod) 
    this.setState({wod})
  })
  .catch(function(error) {
    console.log('error')
  })
}

handleSumbit = (e) => {
  e.preventDefault();
  console.log('submit_state', this.state)
  
  this.post(this.state)
} 

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
  
  console.log('state', this.state)
}

render() {
    return (
<div className="AddWorkout">
      <h3>Submit a New Workout</h3>

      <form onSubmit={this.handleSumbit}> 
        <label>Name:</label>
        <textarea name ='workoutName' value={this.state.workoutName} onChange ={this.handleChange}/>      
        
        <label>Equipment Needed:</label>
        <input type='text' name='equipmentNeeded' value={this.state.equipmentNeeded} onChange = {this.handleChange}/>
        
        <label>Workout Description:</label>
        <input type='text' name ='workoutDescription' value={this.state.workoutDescription} onChange ={this.handleChange}/>
        
        <label>Time Needed:</label>
        <input type='text' name ='timeNeeded' value={this.state.timeNeeded} onChange ={this.handleChange}/>
        
        <label>Source:</label>

        <input type='text' name ='source' value={this.state.source} onChange ={this.handleChange}/>
          
        <input type="submit" value="Add Your New Workout"/>  
      </form>
    </div>
    )
  }
}

export default AddWorkout;