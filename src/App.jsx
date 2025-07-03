import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header/Header';
import Top from './Top';
import Introduction from './Introduction/Introduction';
import Agenda from "./Introduction/Agenda";
import Outcome from './Introduction/Outcome';
import Purpose from './Introduction/Purpose';
import Ubuntu from './Download/Ubuntu';
import Visual from './Download/Visual';
import Virtual from './Download/Virtual';
import Chapter1 from './Chapter1/Chapter1';
import Chapter2 from './Chapter2/Chapter2';
import Chapter3 from './Chapter3/Chapter3';
import Chapter4 from './Chapter4/Chapter4';
import Chapter5 from './Chapter5/Chapter5';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/agenda' element={<Agenda />} />
        <Route path='/outcome' element={<Outcome />} />
        <Route path='/purpose' element={<Purpose />} />
        <Route path='/ubuntu' element={<Ubuntu />} />
        <Route path='/virtualbox' element={<Virtual />} />
        <Route path='/microsoftvisual' element={<Visual />} />
        <Route path='chapter1/*' element={<Chapter1 />} />
        <Route path='chapter2/*' element={<Chapter2 />} />
        <Route path='chapter3/*' element={<Chapter3 />} />
        <Route path='chapter4/*' element={<Chapter4 />} />
        <Route path='chapter5/*' element={<Chapter5 />} />
      </Routes>
    </Router>
  )
}

export default App
