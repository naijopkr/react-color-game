import React from 'react'

const header = props => (
  <div className='Header'>
    <h3>The great</h3>
    <h2>{`RGB(${props.color.red}, ${props.color.green}, ${props.color.blue})`}</h2>
    <h3>Guessing game</h3>
    <div className='stripe'>
      <button onClick={props.startGame}>New game</button>
      <span id='feedback'>{props.status}</span>
      <button onClick={props.changeDifficulty} className="difficulty">Easy</button>
	    <button onClick={props.changeDifficulty} className="selected difficulty">Hard</button>
    </div>
  </div>
)

export default header