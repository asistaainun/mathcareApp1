import React, { useState } from 'react';
import { SearchIcon, UserIcon, HeartIcon, ShoppingBagIcon, MenuIcon, XIcon } from 'lucide-react';
import './Header.css';

const Header = ({ currentPage, navigateTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header sticky-header">
      <div className="container header-container">
        <button onClick={() => navigateTo('home')} className="logo-button">matchare</button>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <button 
            onClick={() => navigateTo('home')} 
            className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </button>
          <button 
            onClick={() => navigateTo('discover')} 
            className={currentPage === 'discover' ? 'nav-link active' : 'nav-link'}
          >
            Discover
          </button>
          <button 
            onClick={() => navigateTo('quiz')} 
            className={currentPage === 'quiz' ? 'nav-link active' : 'nav-link'}
          >
            Skin Quiz
          </button>
          <button 
            onClick={() => navigateTo('routine')} 
            className={currentPage === 'routine' ? 'nav-link active' : 'nav-link'}
          >
            My Routine
          </button>
          <button 
            onClick={() => navigateTo('ingredients')} 
            className={currentPage === 'ingredients' ? 'nav-link active' : 'nav-link'}
          >
            Ingredients
          </button>
        </nav>
        
        {/* Header Icons */}
        <div className="header-icons">
          <button className="icon-button">
            <SearchIcon size={20} />
          </button>
          <button className="icon-button">
            <UserIcon size={20} />
          </button>
          <button className="icon-button">
            <HeartIcon size={20} />
          </button>
          <button className="icon-button">
            <ShoppingBagIcon size={20} />
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-container">
            <button 
              onClick={() => {navigateTo('home'); setMobileMenuOpen(false);}} 
              className={currentPage === 'home' ? 'mobile-nav-link active' : 'mobile-nav-link'}
            >
              Home
            </button>
            <button 
              onClick={() => {navigateTo('discover'); setMobileMenuOpen(false);}} 
              className={currentPage === 'discover' ? 'mobile-nav-link active' : 'mobile-nav-link'}
            >
              Discover
            </button>
            <button 
              onClick={() => {navigateTo('quiz'); setMobileMenuOpen(false);}} 
              className={currentPage === 'quiz' ? 'mobile-nav-link active' : 'mobile-nav-link'}
            >
              Skin Quiz
            </button>
            <button 
              onClick={() => {navigateTo('routine'); setMobileMenuOpen(false);}} 
              className={currentPage === 'routine' ? 'mobile-nav-link active' : 'mobile-nav-link'}
            >
              My Routine
            </button>
            <button 
              onClick={() => {navigateTo('ingredients'); setMobileMenuOpen(false);}} 
              className={currentPage === 'ingredients' ? 'mobile-nav-link active' : 'mobile-nav-link'}
            >
              Ingredients
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;