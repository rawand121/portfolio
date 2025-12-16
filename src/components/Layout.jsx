import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

export default function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
      <CustomCursor />
      <Footer />
    </>
  );
}
