import React from 'react';
import Sidebar from '../components/sidebar';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="flex">
        {children}
      </div>
    </div>
  );
};

export default Layout;
