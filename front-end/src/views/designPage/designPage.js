import React, { useState } from 'react'
import DesignBtn from './components/DesignBtn'
import OptionCasing from './components/OptionCasing'

const DesignPage = () => {
  const [state, setState] = useState(false)
  return (
    <div>
      <DesignBtn show1={state} show={()=>{setState(true)}}/>
      <OptionCasing show1={state} hide={()=>{setState(false)}}/>
    </div>
  )
}

export default DesignPage