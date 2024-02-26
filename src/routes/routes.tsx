import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Home,
  Bankroll,
  AddBankroll,
  EditBankroll,
  CreatedAccount,
  Login,
  Appetizer,
  AppetizerSimple,
  AppetizerMultiple,
  AppetizerBack,
  AppetizerLay,
  AppetizerCash,
  AppetizerMTT,
} from '../pages'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createdAccount" element={<CreatedAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bankroll" element={<Bankroll />} />
        <Route path="/newBankroll" element={<AddBankroll />} />
        <Route path="/editBankroll" element={<EditBankroll />} />
        <Route path="/appetizer" element={<Appetizer />} />
        <Route path="/appetizerSimple" element={<AppetizerSimple />} />
        <Route path="/appetizerMultiple" element={<AppetizerMultiple />} />
        <Route path="/appetizerBack" element={<AppetizerBack />} />
        <Route path="/appetizerLay" element={<AppetizerLay />} />
        <Route path="/appetizerCash" element={<AppetizerCash />} />
        <Route path="/appetizerMTT" element={<AppetizerMTT />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
