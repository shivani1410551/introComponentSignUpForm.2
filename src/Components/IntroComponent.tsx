import React from 'react'

const IntroComponent:React.FC = () => {
  return (
    <div className=' h-full sm:w-[70vw] lg:w-[30rem] flex-center text-[#f2f3f4] lg:px-4 lg:space-y-6 sm:space-y-2 sm:px-6 sm:text-center lg:text-start'>
      <h1 className='font-bold lg:text-5xl sm:text-2xl '>Learn to code by watching others</h1>
      <h2 className='font-medium lg:text-base sm:text-sm'> See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
   but understanding how developers think is invaluable.</h2>
    </div>
  )
}

export default IntroComponent
