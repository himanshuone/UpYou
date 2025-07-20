import React from 'react'

function Navigation() {
  return (
    <div className="bg-gray-300 w-screen h-screen p-6">
      <div className="bg-white w-full h-full rounded-2xl shadow-md p-4 max-w-8xl mx-auto">
        <div className="flex items-center justify-between p-3 text-gray-700 jus">
          <div className="text-xl font-semibold ml-10">UpYou</div>
          <div className="space-x-6 mr-10">
            <span className="mr-10">Habits</span>
            <span className="mr-10">Stories</span>
            <span className="mr-10">Breathing</span>
            <span >Friends</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
