import React from 'react'
import Choice from './Choice'

const choiceList = props => {
  const choices = props.color.map((color, index) => {
    return <Choice click={props.click} key={index} color={color} />
  })

  return (
    <div className='ChoiceList'>
      {choices}
    </div>
  )
}

export default choiceList