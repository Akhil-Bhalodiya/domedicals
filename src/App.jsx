import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home'
import OurPurpose from './pages/OurPurpose'
import PatientFirst from './pages/PatientFirst'
import OurTeam from './pages/OurTeam'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/our-purpose" element={
          <MainLayout>
            <OurPurpose />
          </MainLayout>
        } />
        <Route path="/patient-first" element={
          <MainLayout>
            <PatientFirst />
          </MainLayout>
        } />
        <Route path="/our-team" element={
          <MainLayout>
            <OurTeam />
          </MainLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App
