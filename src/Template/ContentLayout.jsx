import React from 'react';
import { Outlet } from 'react-router-dom';
import back2 from '../assets/Other/back2.jpg';
import Footer from './Footer/Footer';

export default function ContentLayout({ currentPath, location, match, chapter, className, pages }) {
  const detailClass = "border-b-[2px] border-[tomato] xl:text-[1.5rem]";
  const frameClass = "border-[tomato] border-[2px] relative z-10";

  return (
    <div
      className={`bg-cover ${className}`}
      style={{ backgroundImage: `url(${back2})` }}
    >
      <Outlet context={{ detailClass, frameClass, chapter }} />
      <Footer
        className=""
        pages={pages}
        location={location}
        match={match}
        chapter={chapter}
        currentPath={currentPath}
        />
    </div>
  );
}