import React from 'react'

import "./GD.css"
const DashBoard = () => {
  return (
    <>
      <div className="main relative">
        {/* Navbar at the top-left corner */}
        <div className="navbar absolute top-0 left-0 p-4">
          <div className="assemble text-white text-2xl font-bold">ASSEMBLE</div>
          <div className="GUI text-white text-lg">GAMEZONE UNITED INDIA</div>
        </div>

        {/* Left Sidebar */}
        <div className="left-sidebar  absolute top-0 left-0 h-full w-[60px] mt-20 bg-opacity-75">
          {/* Content for left sidebar */}
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar absolute top-0 right-0 h-full w-[60px] mt-20 bg-opacity-75">
          {/* Content for right sidebar */}
        </div>

        {/* Frosted glass effect with content */}
        <div className="black h-screen w-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="black h-[90%] w-[50%] border-slate-400 border-2 rounded-2xl bg-[#ffffff] bg-opacity-15 backdrop-blur-md">
            {/* Additional content goes here */}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard
