import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Top from './Top'
import Chapter1 from './Chapter1/Chapter1'
import Chapter2 from './Chapter2/Chapter2'
import Chapter3 from './Chapter3/Chapter3'
import './App.css'
import Header from './Header/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='Chapter1/*' element={<Chapter1 />} />
        <Route path='Chapter2/*' element={<Chapter2 />} />
        <Route path='Chapter3/*' element={<Chapter3 />} />
      </Routes>
    </Router>
  )
}

export default App
