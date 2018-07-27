import React, { Component } from 'react'

class AddExercise extends Component {

constructor(props) {
  super(props);
  this.state = {
          exerciseName: '',
          musclesWorked: '',
          demo: '',
}}

post = (data) => {
  console.log('data', data)

const url = `https://workouts-p3.herokuapp.com/exercises`

  let content = {
    name: data.exerciseName,
    muscles_worked: data.musclesWorked,
    demo_or_description: data.demo,
    };

  console.log('contet', content)

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(content),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(resp => resp.json())
  .then(exercise => {
    console.log('response', exercise) 
    this.setState({exercise})
  })
  .catch(function(error) {
    console.log('error')
  })
}

handleSumbit = (e) => {
  e.preventDefault();
  console.log('submit_state', this.state)
  
  this.post(this.state)
  this.setState({
    exerciseName: '',
    musclesWorked: '',
    demo: ''
  });
  
} 

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
  
  console.log('state', this.state)
}

clearForm = () => {
this.setState({
  exerciseName: '',
  musclesWorked: '',
  demo: ''
})
};



render() {
    return (
      <div className="AddExercise">
    <h3>Submit a new exercise</h3>
      <form onSubmit={this.handleSumbit}> 
        <label>Exercise Name:</label>
        <input type='text' name ='exerciseName' value={this.state.exerciseName}  onChange ={this.handleChange}/>      
        
        <label>Muscles Worked:</label>
        <input type='text' name='musclesWorked' value={this.state.musclesWorked} onChange = {this.handleChange}/>
        
        <label>Demo or Description:</label>
        <input type='text' name ='demo' value={this.state.demo}  onChange ={this.handleChange} />
        
        <input type="submit" value="Add Exercise" onClick={this.clearForm}/>
        <input type="button" name="clearForm" value="Clear Form" onClick={this.clearForm}  />
      </form>
    </div>
    )
  }
}

export default AddExercise;