import React from 'react'
import { useEffect } from 'react';
import Total from './Total'
import Tasks from './Tasks'
import Timer from './Timer'
import Rank from './Rank'
import Done from './Done'


function Pomodoro() {
      const [totalTimeToday, setTotalTimeToday] = useState(0);

  return (
    <>
      <div className="w-full h-full relative">
        <Timer setTotalTimeToday={setTotalTimeToday} totalTimeToday={totalTimeToday} />
        <Rank/>
        <Done/>
        <Tasks />
        <Total totalTimeToday={totalTimeToday} />
      </div>


    </>
  )
}

export default Pomodoro