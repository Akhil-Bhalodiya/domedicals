import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main> {/* Add pt-16 for navbar height */}
      <Footer />
    </div>
  )
}

export default MainLayout