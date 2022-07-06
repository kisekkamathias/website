import React from 'react'
import '../styles/DesignBtn.css'
const DesignBtn = (props) => {
  return (
    <button className={props.show1?'create-btn btn': 'create-btn'} onClick={props.show}>
      <b>D</b>
      <p className='createTxt'>
        <b>  Create</b>
      </p>
    </button>
  )
}

export default DesignBtn