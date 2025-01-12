import React from 'react'

const IntroComponent:React.FC = () => {
  return (
    <div className=' h-full sm:w-[80vw] lg:w-[36rem] flex-center text-[#f2f3f4] lg:px-4 lg:space-y-6 sm:space-y-4 sm:px-4 sm:text-center lg:text-start'>
      <h1 className='font-bold lg:text-5xl sm:text-3xl '>Learn to code by watching others</h1>
      <h2 className='font-medium text-base '> See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
   but understanding how developers think is invaluable.</h2>
    </div>
  )
}

export default IntroComponent
