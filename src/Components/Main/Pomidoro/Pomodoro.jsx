import React from 'react'
import Total from './Total'
import Tasks from './Tasks'

function Pomodoro() {
  return (
    <>
    <div className="w-full h-full relative">
        <Tasks />
        <Total />
    </div>
    
    
    </>
  )
}

export default Pomodoro