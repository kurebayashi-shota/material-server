import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentLayout from './Components/Pages/ContentLayout'
import SelectFooter from './Components/Footer/SelectFooter'
import Index from './Components/Pages/Index';
import Page1 from './Components/Pages/Page1';
import Page2 from './Components/Pages/Page2';
import Page3 from './Components/Pages/Page3';
import Page4 from './Components/Pages/Page4';
import Page5 from './Components/Pages/Page5';
import Page6 from './Components/Pages/Page6';
import Page7 from './Components/Pages/Page7';
import Page8 from './Components/Pages/Page8';
import Page9 from './Components/Pages/Page9';
import Page10 from './Components/Pages/Page10';
import Page11 from './Components/Pages/Page11';
import Page12 from './Components/Pages/Page12';
import Page13 from './Components/Pages/Page13';

export default function Chapter1() {

  const pages = [Page1,Page2,Page3,Page4,Page5,Page6,Page7,Page8,Page9,Page10,Page11,Page12,Page13]
  const routes = pages.map((PageComponent, index) => ({
    id: index + 1,
    path: `page${index + 1}`,
    element: <PageComponent />,
    page: `chapter1/page${index + 1}`,
    value: `${index + 1}`,
    ...(index >= 9 && { class: '!px-[2px]' }),
  }));

  return (
    // <Router>
      <div className='h-screen w-screen overflow-hidden'>
          <div className='flex h-[90%]'>
            <Routes>
              <Route
                path="/"
                element={
                  <ContentLayout
                    className="flex-grow"
                  />
                }
              >
                <Route
                  index
                  element={<Index />}
                />
                {routes.map((route)=> (
                  <Route key={route.id} path={route.path} element={route.element} />
                ))}
              </Route>
            </Routes>
          </div>
          <SelectFooter className="h-[10%] w-screen" routes={routes} />
      </div>
    // </Router>
  )
}
