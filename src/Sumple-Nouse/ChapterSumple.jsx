import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { pagesData } from '../Data/PagesData';
import ContentLayout from '../Template/ContentLayout';
import Index from './Index';

export default function Chapter4({chapterInfo}) {
  const location = useLocation();
  const currentPath = location.pathname;

  const match = currentPath.match(/^\/chapter(\d+).*$/);
  const chapter = match[1];
  const currentChapter = `/chapter${chapter}`;
  const pages = pagesData[3];
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
                        match={match}
                        chapter={chapter}
                        currentPath={currentPath}
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
