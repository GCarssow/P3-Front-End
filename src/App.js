import React, { Component } from 'react';

import Header from './components/Header'
import RandomWorkout from './components/RandomWorkout'
import AddWorkout from './components/AddWorkout'
import AddExercise from './components/AddExercise'
import ExerciseDropdown from './components/ExerciseDropdown'

import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />

        <RandomWorkout />
        
        <AddWorkout />
        <AddExercise />
        <ExerciseDropdown />
        
      </div>
    );
  }
}

export default App;

// <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
  // constructor(){
  //   super();
  //   this.state = {
  //     chartData:{}
  //   }
  // }
  
  // componentWillMount(){
  //   this.getChartData();
  // }
  
  // getChartData(){
  //   // Ajax calls here
  //   this.setState({
  //     chartData:{
  //       labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
  //       datasets:[
  //         {
  //           label:'Population',
  //           data:[
  //             617594,
  //             181045,
  //             153060,
  //             106519,
  //             105162,
  //             95072
  //           ],
  //           backgroundColor:[
  //             'rgba(255, 99, 132, 0.6)',
  //             'rgba(54, 162, 235, 0.6)',
  //             'rgba(255, 206, 86, 0.6)',
  //             'rgba(75, 192, 192, 0.6)',
  //             'rgba(153, 102, 255, 0.6)',
  //             'rgba(255, 159, 64, 0.6)',
  //             'rgba(255, 99, 132, 0.6)'
  //           ]
  //         }
  //       ]
  //     }
  //   });
  // }