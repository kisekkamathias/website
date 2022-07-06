import React from 'react'
import '../styles/HideBtn.css'

const HideBtn = ({hide}) => {
  return (
    <button className='hide' onClick={hide}>x</button>
  )
}

export default HideBtn