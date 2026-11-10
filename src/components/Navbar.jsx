import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-badge">Dev</span>
          <span className="logo-text">Blog</span>
        </Link>

        {/* Mobile toggle button */}
        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`navbar-nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about-us" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Giới thiệu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/posts" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Bài viết
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
