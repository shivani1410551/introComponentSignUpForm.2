import React from 'react'
import IntroComponent from './Components/IntroComponent'
import { SignUpForm } from './Components/SignUpForm'
import Attribution from './Components/Attribution'

const App:React.FC= () => {
  return (
    <main
      className="font-Poppins min-h-screen flex flex-col items-center justify-between
      bg-red-500 bg-cover
      sm:bg-[url('../public/images/bg-intro-mobile.png')]
      lg:bg-[url('../public/images/bg-intro-desktop.png')]"
    >
      {/* Grid container for content */}
      <div
        className="w-[90vw] sm:w-[80vw] lg:w-[70vw] flex-grow grid grid-cols-1 lg:grid-cols-2 items-center gap-6
        sm:gap-4 py-8"
      >
        <IntroComponent />
        <SignUpForm />
      </div>

      {/* Attribution section */}
      <Attribution />
    </main>
  )
}

export default App
