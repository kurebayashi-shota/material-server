import React from 'react';
import './App.css';
import { pagesData } from './Data/PagesData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Template/Header/Header';
import Top from './Top';
import Introduction from './Introduction/Introduction';
import Agenda from "./Introduction/Agenda";
import Outcome from './Introduction/Outcome';
import Purpose from './Introduction/Purpose';
import Ubuntu from './Download/Ubuntu';
import Visual from './Download/Visual';
import Virtual from './Download/Virtual';
import Test from './Sumple-Nouse/Test'

function App() {
  const chapters = pagesData[0];
  const chapterComponents = chapters.map((PageComponent, index) => ({
    id: index + 1,
    path: `chapter${index + 1}/*`,
    element: <PageComponent chapter={index + 1} />,
  }))
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
        {chapterComponents.map((chapterComponent)=>(
          <Route
            key={chapterComponent.id}
            path={chapterComponent.path}
            element={chapterComponent.element}
          />
        ))}
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  )
}

export default App
