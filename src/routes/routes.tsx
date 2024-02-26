import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Home,
  Bankroll,
  AddBankroll,
  EditBankroll,
  CreatedAccount,
  Login,
} from '../pages'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bankroll" element={<Bankroll />} />
        <Route path="/newBankroll" element={<AddBankroll />} />
        <Route path="/editBankroll" element={<EditBankroll />} />
        <Route path="/createdAccount" element={<CreatedAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
