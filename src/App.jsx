import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Support from './Components/Main/Support'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Breathing from './Components/Main/Breathing/Breathing'
import Habits from './Components/Main/Habits/Habits'
import Pomodoro from './Components/Main/Pomidoro/Pomodoro'
import Stories from './Components/Main/Stories/Stories'
import Friends from './Components/Main/Friends/Friends'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Support />,
    children: [
      {
        index:true,
        element:<Habits />
      },
      {
        path: "/Habits",
        element: <Habits />,
      },
      {
        path: "/Pomodoro",
        element: <Pomodoro />,
      },
      {
        path: "/Stories",
        element: <Stories/>,
      },
      {
        path: "/Breathing",
        element: <Breathing />,
      },
      {
        path: "/Friends",
        element: <Friends />,
      }
    ]
  },
]);

function App() {

  return (
   <RouterProvider router={router} />
  )
}

export default App
