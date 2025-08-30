import React from 'react'
import Navigation from './nav/Navigation'
import Habits from './Habits/Habits'
import { Outlet } from 'react-router-dom'


function Support() {
  return (
    <div className="bg-gray-300 w-screen h-screen p-6 font-varela">
        <div className=" bg-gray-100 w-full h-full rounded-4xl shadow-md p-4 max-w-8xl  mx-auto flex flex-col">
        <Navigation/>
        <Outlet />
        
        </div>
    </div>
  )
}

export default Support