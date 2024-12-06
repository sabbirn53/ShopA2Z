import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Fixed import for Link
import logo from "../../assets/images/logo/logo.png";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // Header Fixed Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Fixed window.screenY to window.scrollY
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInUp' : ''}`}>
      {/* header top */}
      <div className={`header-top d-md-none ${socialToggle ? 'open' : ''}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className='lab-btn me-3'>
              <span>Create Account</span>
            </Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo section */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="ShopA2Z" />
                </Link>
              </div>
            </div>
            {/* Menu Section */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
                <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block '>Create Account</Link>
                <Link to="login" className='d-none d-md-block'>Log in</Link>

                {/* Menu Toggler */}
                <div onClick={()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ?'active':''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Social Toggler */}
                <div onClick={()=>setSocialToggle(!socialToggle)} className="ellepsis-bar d-md-none">
                <i className="icofont-info-circle"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
