//Top
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sideber from '../Components/Sideber/Sideber';
import Top from './Components/Pages/Top';
import SelectFooter from '../Components/Footer/SelectFooter';
import Page1 from '../Components/Main/Page1';
import Page2 from '../Components/Main/Page2';

//Main
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <Router>
      <div className="h-screen w-screen">
        <div className="flex h-[90%]">
          <Sideber className="w-[10rem]" />
          <div className="flex-grow">
            {/* ページ遷移の設定 */}
            <Routes>
              <Route path="/" element={<Main />}>
                {/* この中でoutletの要素を指定する */}
                <Route path="page1" element={<Page1 />} />
                <Route path="page2" element={<Page2 />} />
              </Route>
            </Routes>
          </div>
        </div>
        <SelectFooter className="h-[10%] w-screen" />
      </div>
    </Router>
  );
}


function Top() {
    return (
      <div>
        <h2>Main Content Area</h2>
        <Outlet />  {/* ここで子ルートのコンポーネントが表示されます */}
      </div>
    );
  }