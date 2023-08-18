import React, { useContext } from 'react'

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from "./container"
import { Navbar } from "./components"

import "./App.css"
import { Context } from './context/Context'
import Login from './components/Login/Login'
import Booking from './components/Booking/Booking'

const App = () => {
  const { isLoginVisible, isBookingVisible } = useContext(Context)

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
      { isLoginVisible ? <Login /> : null }
      { isBookingVisible ? <Booking /> : null }
    </div>
  )
}

export default App
