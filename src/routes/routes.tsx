import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Bankroll } from '../pages'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bankroll" element={<Bankroll />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
