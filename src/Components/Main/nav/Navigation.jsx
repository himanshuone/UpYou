import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (

    <>
      <div className="flex items-center justify-between p-3 text-gray-700  ">
        <div className="text-xl font-semibold ml-10 font-stretch-130%">UpYou</div>
        <div className="space-x-6 mr-10">
          <span className="mr-10">
            <NavLink to="/Habits" className={({ isActive }) => ` ${isActive ? "text-orange-700 " : "text-black-700"} font-stretch-110%`}>Habits</NavLink> </span>
          <span className="mr-10 "><NavLink to="/Breathing" className={({ isActive }) => ` ${isActive ? "text-orange-700 " : "text-black-700"} font-stretch-110%`}>Breathing</NavLink></span>
          <span className="mr-10"><NavLink to="/Stories" className={({ isActive }) => ` ${isActive ? "text-orange-700 " : "text-black-700"} font-stretch-110%`}>Stories</NavLink></span>
          <span ><NavLink to="/Friends" className={({ isActive }) => ` ${isActive ? "text-orange-700 " : "text-black-700"} font-stretch-110%`}>Friends</NavLink></span>
        </div>
      </div>
    </>

  )
}

export default Navigation
