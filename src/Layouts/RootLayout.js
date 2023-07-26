import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function RootLayout(){
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='root-layout'>
        <Header />

        <main className='container'>
            <Outlet />
        </main>
        <Footer />
    </div>
    
  );
};
