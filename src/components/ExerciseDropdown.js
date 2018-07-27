import React from 'react';

class ExerciseDropdown extends React.Component {
    componentDidMount() {
        let exercises = [];  
        fetch('https://workouts-p3.herokuapp.com/exercises')
        .then(response => { 
            return response.json();
        }).then(data => {
            exercises = data.exercise;
            console.log(exercises);
                this.setState({
                currentExercise: {},    
                exercise: exercises,
                
        });
    });
};



constructor() {
        super();
    this.state = {
            displayMenu: false,
            exerciseList: []
            };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    
};

showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: !this.state.displayMenu }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
}

showSelectedExercise = (exercise) => {
    return this.setState({currentExercise: exercise})
}

render () {
    return (
    <div  className="dropdown" style = {{background:"white", width:"200px"}} >
        
    <div className="button" onClick={this.showDropdownMenu}>List of Exercises </div> 
        
        <div className="exerciseDropdown">
            { this.state.displayMenu ? (
        <ul>
            {this.state.exercise.map(exercises => {
                return <li onClick={() => this.showSelectedExercise(exercises)} key={exercises.name}>{exercises.name}</li>
            })}           
        </ul>    
    ):
    (
        null
    )
}   
    <div className="selectedExercise">
    <ul>
          <li>Name: {this.state.exerciseList.name}</li>
          <li>Muscles Worked: {this.state.exerciseList.muscles_worked}</li>
          <li>Demo or Description: {this.state.exerciseList.demo_or_description}</li>
          
        </ul>
    </div>
    </div>
        
        
        </div>
        )
    }
}

export default ExerciseDropdown;