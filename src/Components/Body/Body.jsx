import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <>
    <div className="flex">
        <Sidebar />
        <div className="sm:ml-[20%] md:ml-[13%] mt-12 w-[86%]">
          <Outlet/>
        </div>
      </div>
    </>
    
  )
}

export default Body