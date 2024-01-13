import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Custom from './component/custom/Custom';
import Header from './component/homePage/header/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Custom></Custom>,
    children:[
      {
        path:'/',
        element:<Header></Header>
      }
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
