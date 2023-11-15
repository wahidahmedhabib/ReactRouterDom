import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Router, Route } from 'react-router-dom'
import LayOut from './LayOut.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/ContectUs/ContactUs.jsx'
import Users from './Components/Users/Users.jsx'
import Github , {gitInfo} from './Components/GitHub/Github.jsx'

{
  console.log(gitInfo)
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<LayOut />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='users/:id' element={<Users />} />
      
      <Route
      
      loader={gitInfo} 
      path='github' 
      element={<Github />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
