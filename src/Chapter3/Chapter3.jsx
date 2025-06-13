import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentLayout from './ContentLayout';
import Index from './Index';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';
import Page7 from './Pages/Page7';
import Page8 from './Pages/Page8';
import Page9 from './Pages/Page9';
// import Page10 from './Pages/Page10';

export default function Chapter3() {
  const pages = [
    Page1,Page2,Page3,Page4,Page5,Page6,Page7,Page8,Page9,
    // Page10,
]
  const routes = pages.map((PageComponent, index) => ({
    id: index + 1,
    path: `page${index + 1}`,
    element: <PageComponent className="h-[70%]" />,
    page: `chapter1/page${index + 1}`,
  }));

  return (
    <div className=''>
        <Routes>
            <Route
                path="/"
                element={
                    <ContentLayout
                        className="h-screen"
                        pages={pages}
                    />
                }
            >
                <Route
                    index
                    element={
                        <Index className="h-[70%]" />
                    }
                />
                {routes.map((route)=> (
                  <Route key={route.id} path={route.path} element={route.element} />
                ))}
            </Route>
        </Routes>
    </div>
  )
}
