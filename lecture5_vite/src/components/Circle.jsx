import React from 'react'

const Circle = () => {
  return (
    <div className='min-h-screen grid place-content-center bg-radial from-purple-500 from-50% to-orange-500'>
    <div className="bg-emerald-500 h-52 w-52 rounded-full shadow-2xl grid place-content-center">
      <div className="bg-teal-500 h-32 w-32 rounded-full grid place-content-center">
        <div className="bg-red-500 w-16 h-16 rounded-full"></div>
      </div>
    </div>
    </div>
  )
}

export default Circle
