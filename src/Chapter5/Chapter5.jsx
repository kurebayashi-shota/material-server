import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Page10 from './Pages/Page10';
import Page11 from './Pages/Page11';
import Page12 from './Pages/Page12';
import Page13 from './Pages/Page13';
import Page14 from './Pages/Page14';
import Page15 from './Pages/Page15';
import Page16 from './Pages/Page16';
import Page17 from './Pages/Page17';
import Page18 from './Pages/Page18';
import Page19 from './Pages/Page19';
import Page20 from './Pages/Page20';
import Page21 from './Pages/Page21';
import Page22 from './Pages/Page22';
import Page23 from './Pages/Page23';
import Page24 from './Pages/Page24';
import Page25 from './Pages/Page25';
import Page26 from './Pages/Page26';
import Page27 from './Pages/Page27';
import Page28 from './Pages/Page28';
import Page29 from './Pages/Page29';
import Page30 from './Pages/Page30';
import Page31 from './Pages/Page31';
import Page32 from './Pages/Page32';
import Page33 from './Pages/Page33';
import Page34 from './Pages/Page34';
import Page35 from './Pages/Page35';
import Page36 from './Pages/Page36';
import Page37 from './Pages/Page37';
import Page38 from './Pages/Page38';
// import Page39 from './Pages/Page39';
// import Page40 from './Pages/Page40';

export default function Chapter5() {
  const pages = [
    Page1,Page2,Page3,Page4,Page5,
    Page6,Page7,Page8,Page9,Page10,
    Page11,Page12,Page13,Page14,Page15,
    Page16,Page17,Page18,Page19,Page20,
    Page21,Page22,Page23,Page24,Page25,
    Page26,Page27,Page28,Page29,Page30,
    Page31,Page32,Page33,Page34,Page35,
    Page36,Page37,Page38,
    // Page39,Page40,
  ]
  const routes = pages.map((PageComponent, index) => ({
    id: index + 1,
    path: `page${index + 1}`,
    element: <PageComponent className="h-[70%]" />,
    page: `chapter5/page${index + 1}`,
  }));

  return (
    <div className=''>
        <Routes>
            <Route
                path="/"
                element={
                    <ContentLayout
                        className="h-screen"
                        pages={routes}
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
