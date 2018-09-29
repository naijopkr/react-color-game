import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ChoiceList from './ChoiceList'
import * as colors from './colors'

class App extends Component {
  state = {
    level: 6,
    color: [],
    pickedColor: {},
    statusMessage: ''
  }

  componentDidMount = () => {
    this.startGame()
  }

  startGame = () => {
    this.toggleChoiceVisibility()
    this.setState({ statusMessage: '' })
    colors.changeColor('steelblue')
    let arr = []
    for (let i = 0; i < this.state.level; i++) {
      arr.push(colors.createRandomColor())
    }
    this.setState({ color: arr, pickedColor: colors.pickColor(arr) })
  }

  toggleChoiceVisibility = () => {
    const choices = document.querySelectorAll('.Choice')
    for (let choice of choices) {
      choice.style.opacity = 1
    }
  }

  changeColor = (color) => {
    const choices = document.querySelectorAll('.Choice')
    for (let choice of choices) {
      choice.style.backgroundColor = color
    }
    colors.changeColor(color)
  }

  choiceHandler = (event) => {
    const { pickedColor } = this.state
    const rightAnswer = Object.values(pickedColor).join(', ')
    const chosenColor = event.target.style.backgroundColor.slice(4, -1)
    if (chosenColor === rightAnswer) {
      this.setState({ statusMessage: 'Correct!' })
      this.toggleChoiceVisibility()
      this.changeColor(event.target.style.backgroundColor)
    } else {
      this.setState({ statusMessage: 'Wrong! Try again.' })
      event.target.style.opacity = 0
    }
  }

  difficultyHandler = async (event) => {
    const difficultyButtons = document.querySelectorAll('.difficulty')
    for (let difficultyButton of difficultyButtons) {
      difficultyButton.classList.remove('selected')
    }
    event.target.classList.add('selected')
    event.target.textContent === 'Easy'
    ? await this.setState({ level: 3 })
    : await this.setState({ level: 6 })
    this.startGame()
  }

  render() {
    return (
      <div className="App">
        <Header 
         color={this.state.pickedColor} 
         status={this.state.statusMessage} 
         startGame={this.startGame}
         changeDifficulty={this.difficultyHandler} />
        <ChoiceList 
         click={this.choiceHandler} 
         color={this.state.color} />
      </div>
    )
  }
}

export default App;
