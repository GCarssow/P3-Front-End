import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Workout Routine Database!</h1>
        <p>Are you sick and tired of getting to the gym, and then having no idea
      what workout you want to do?  Or maybe you just want to add a little variety to your workouts?</p>
      <p>If so, you've come to the right place.</p>
      <h4>So how does it work?</h4>
      <p>It's very simple: just click on the "Get a Random Workout" 
      button, and you'll immediately get a random workout 
      with a name, equipment needed, a detailed description of how to 
      do the workout, and even an estimated time to complete it.
      There's also a source, whether it be from a website or if it's 
      a routine someone came up with, you'll know exactly who to 
      hate when you start working out.</p>
      <h4>Community Driven</h4>
      <p>I wanted this database to be more than just what I had to offer,
      and give others the opportunity to contribute.  So if you want to add your own
      workout to the database, it's simple: just fill in the 
      mandatory information, hit "Add your new Workout", and your workout 
      will be uploaded to the database.</p>
      <h4>But I'm totally new to this!</h4>
      <p>Don't worry, we've got you covered.  In addition to the workout
      database, we've also included an exercise database, which includes a name,
      description of which muscles the exercise targets, and a 
      "demo or description" section, which either describes how to do the exercise,
      or links you to a video showing you how to do it.  You can even add your own!</p>
      <h4>Now there's only one thing left...</h4>
      <p>Click the button and get started!</p>
      </header>
      
    )
  }
}

export default Header