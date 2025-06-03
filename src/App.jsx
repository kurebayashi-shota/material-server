import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from '.'
import Chapter1 from './Chapter1/Chapter1'
import Chapter2 from './Chapter2/Chapter2'
import './App.css'
import Header from './Header/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='Chapter1/*' element={<Chapter1 />} />
        <Route path='Chapter2/*' element={<Chapter2 />} />
      </Routes>
    </Router>
  )
}

export default App
