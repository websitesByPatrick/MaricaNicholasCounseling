import React from 'react'
import Navbar from '@/components/layout/Navbar'

const Header = () => {
  return (
    <div className="header">
      <div className='header-left-side'>
        <h1 className="header-title">Marica Nicholas</h1>
        <h2 className="header-subtitle">Licensed Professional Counselor - Associate</h2>
      </div>

      <Navbar />
    </div>
  );
}

export default Header