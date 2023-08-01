import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'


import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Home } from './Components/Home/Home.jsx';
import { Aboutt } from './Components/Aboutt/Aboutt.jsx';
import { Services } from './Components/Services/Services.jsx';
import { Portfolio } from './Components/Portfolio/Portfolio.jsx';
import { Contact } from './Components/Contact/Contact.jsx';
const routes = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[{
    path:'',
    element:<Home/>,
  },
  {
    path:'about',
    element:<Aboutt/>,
  },
  {
    path:'services',
    element:<Services/>,
  },{
    path:'portfolio',
    element:<Portfolio/>,
  },
  {
    path:'contact',
    element:<Contact/>,
  }
  ],
},]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
)
