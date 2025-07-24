import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { pagesData } from '../Data/PagesData';
import ContentLayout from './ContentLayout';
import Index from './Index';

export default function ChapterLayout({ chapter }) {
    const location = useLocation();
    const currentPath = location.pathname;
    const currentChapter = `/chapter${chapter}`;
    const pages = pagesData[chapter - 1];
    const routes = pages.map((PageComponent, index) => ({
        id: index + 1,
        path: `page${index + 1}`,
        element: <PageComponent className="h-[70%]" />,
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
                        location={location}
                        currentChapter={currentChapter}
                        chapter={chapter}
                        currentPath={currentPath}
                    />
                }
            >
                <Route
                    index
                    element={
                        <Index chapter={chapter} className="h-[70%]" />
                    }
                />
                {routes.map((route)=> (
                  <Route className="h-[70%]" key={route.id} path={route.path} element={route.element} />
                ))}
            </Route>
        </Routes>
    </div>
  )
}