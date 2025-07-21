import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Support from './Components/Main/Support'
import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'
import Breathing from './Components/Main/Breathing/Breathing'
import Habits from './Components/Main/Habits/Habits'
import Stories from './Components/Main/Stories/Stories'
import Friends from './Components/Main/Friends/Friends'

// ❌ BrowserRouter version (causes 404 on refresh in GitHub Pages)
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Support />,
    children: [
      {
        path: "/Habits",
        element: <Habits />,
      },
      {
        path: "/Stories",
        element: <Stories />,
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
*/

// ✅ HashRouter version (works reliably on GitHub Pages)
const router = createHashRouter([
  {
    path: "/",
    element: <Support />,
    children: [
      {
        path: "/Habits",
        element: <Habits />,
      },
      {
        path: "/Stories",
        element: <Stories />,
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
  return <RouterProvider router={router} />
}

export default App
