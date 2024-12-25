import React, { useEffect, useState } from 'react';
import './Navbar.css'; 
import Header from '../Header/Header';
import MainNavbar from './MainNavbar'

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
    if (window.scrollY > headerHeight) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div >
      <div className="header">
            <Header />
      </div>

      <section className={`navigation ${isSticky ? 'sticky' : ''}`}>
          <MainNavbar />
        
      </section>
    </div>
  );
};

export default Navbar;