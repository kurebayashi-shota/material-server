import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sideber from '../Components/Sideber/Sideber'
import SelectFooter from '../Components/Footer/SelectFooter'
import ContentLayout from '../Components/Pages/ContentLayout'
import Top from '../Components/Pages/Top';
import Page1 from '../Components/Pages/Page1';
import Page2 from '../Components/Pages/Page2';
import Page3 from '../Components/Pages/Page3';
import Page4 from '../Components/Pages/Page4';
import Page5 from '../Components/Pages/Page5';
import Page6 from '../Components/Pages/Page6';
import Page7 from '../Components/Pages/Page7';
import Page8 from '../Components/Pages/Page8';
import Page9 from '../Components/Pages/Page9';
import Page10 from '../Components/Pages/Page10';
import Page11 from '../Components/Pages/Page11';
import Page12 from '../Components/Pages/Page12';
import Page13 from '../Components/Pages/Page13';
// import Page14 from '../Components/Pages/Page14';
// import Page15 from '../Components/Pages/Page15';
// import Page16 from '../Components/Pages/Page16';
// import Page17 from '../Components/Pages/Page17';
// import Page18 from '../Components/Pages/Page18';

export default function Main() {

  const routes =[
    { id:1, path:"/page1", element:<Page1 />},
    { id:2, path:"/page2", element:<Page2 />},
    { id:3, path:"/page3", element:<Page3 />},
    { id:4, path:"/page4", element:<Page4 />},
    { id:5, path:"/page5", element:<Page5 />},
    { id:6, path:"/page6", element:<Page6 />},
    { id:7, path:"/page7", element:<Page7 />},
    { id:8, path:"/page8", element:<Page8 />},
    { id:9, path:"/page9", element:<Page9 />},
    { id:10, path:"/page10", element:<Page10 />},
    { id:11, path:"/page11", element:<Page11 />},
    { id:12, path:"/page12", element:<Page12 />},
    { id:13, path:"/page13", element:<Page13 />},
    // { id:14, path:"/page14", element:<Page14 />},
    // { id:15, path:"/page15", element:<Page15 />},
    // { id:16, path:"/page16", element:<Page16 />},
    // { id:17, path:"/page17", element:<Page17 />},
    // { id:18, path:"/page18", element:<Page18 />},
    // { id:19, path:"/page19", element:<Page19 />},
    // { id:1, path:"/page1", element:<Page1 />},
  ]
  return (
    <Router>
      <div className='h-screen w-screen'>
          <div className='flex h-[90%]'>
            {/* <Sideber className="w-[10rem]"/> */}
            <Routes>
              <Route path="/" element={<ContentLayout className="flex-grow"/>}>
                <Route index element={<Top />} />
                {routes.map((route)=> (
                <Route key={route.id} path={route.path} element={route.element} />
                ))}
              </Route>
            </Routes>
          </div>
          <SelectFooter className="h-[10%] w-screen" />
      </div>
    </Router>
  )
}
