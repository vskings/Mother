import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-black">
      <Navbar />

      <div className="relative">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
