import React from 'react'
import '../styles/OptionCasing.css'
import HideBtn from './HideBtn'

const OptionCasing = (props) => {
  return (
    <div className={props.show1? 'casing active' : 'casing'}>
      <HideBtn hide={props.hide}/>
    </div>
  )
}

export default OptionCasing