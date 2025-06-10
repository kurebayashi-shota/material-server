import React from 'react';
import { Outlet } from 'react-router-dom';
import back2 from '../assets/Other/back2.jpg';
import Footer from './Footer/Footer';

export default function ContentLayout({ className, pages }) {
  return (
    <div
      className={`bg-cover ${className}`}
      style={{ backgroundImage: `url(${back2})` }}
    >
      <Outlet />
      <Footer className="" pages={pages} />
    </div>
  );
}