import React from 'react'

const choice = props => {
  const style = {
    backgroundColor: `RGB(${props.color.red},${props.color.green},${props.color.blue})`
  }
  return <div className='Choice' style={style} onClick={props.click}></div>
}

export default choice