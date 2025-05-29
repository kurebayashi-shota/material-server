import React from 'react';
import { Outlet } from 'react-router-dom';
import back from './../../assets/back.png';

export default function ContentLayout({ className }) {
  return (
    <div
      className={`bg-cover ${className}`}
      style={{ backgroundImage: `url(${back})` }}
    >
      <Outlet />
    </div>
  );
}
