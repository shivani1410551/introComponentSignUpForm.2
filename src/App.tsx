import React from 'react'
import IntroComponent from './Components/IntroComponent'
import { SignUpForm } from './Components/SignUpForm'
import Attribution from './Components/Attribution'

const App:React.FC= () => {
  return (
    <main
      className="font-Poppins min-h-screen flex flex-col items-center justify-between
      bg-Red bg-cover
      sm:bg-[url('../public/images/bg-intro-mobile.png')]
      lg:bg-[url('../public/images/bg-intro-desktop.png')]"
    >
      {/* Grid container for content */}
      <div
        className="w-[80vw] py-16  flex sm:flex-col lg:flex-row items-center lg:justify-between gap-[4em]"
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
