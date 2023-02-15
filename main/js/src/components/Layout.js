import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="relative">{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
