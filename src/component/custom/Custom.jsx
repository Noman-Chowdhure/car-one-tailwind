import React from 'react'
import { Outlet } from 'react-router-dom'
import Navtop from './navtop/Navtop'

const Custom = () => {
  return (
    <div>
      <Navtop></Navtop>
      <Outlet></Outlet>
    </div>
  )
}

export default Custom
