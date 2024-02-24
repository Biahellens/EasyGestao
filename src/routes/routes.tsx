import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Bankroll, AddBankroll } from '../pages'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bankroll" element={<Bankroll />} />
        <Route path="/newBankroll" element={<AddBankroll />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
