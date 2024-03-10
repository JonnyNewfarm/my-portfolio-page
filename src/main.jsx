import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import { HomePage } from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact'
import { NavbarComp } from './components/Navbar'

const router = createBrowserRouter([{
  

  path:'/',
  element: <HomePage />
}, {
  path: "/contact",
  element: <Contact />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
