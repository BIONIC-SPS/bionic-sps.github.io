import React from 'react';

const Header = () => {
  return (
    <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="#home">
            <img 
              src="/assets/images/Bionic_Logo.png" 
              alt="BIONIC Logo" 
              style={{ maxHeight: '48px' }}
            />
            <span className="is-size-4 has-text-weight-bold ml-3" style={{ letterSpacing: '2px' }}>BIONIC</span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item has-text-weight-medium" href="#home">Home</a>
            <a className="navbar-item has-text-weight-medium" href="#about">About</a>
            <a className="navbar-item has-text-weight-medium" href="#features">Features</a>
            <a className="navbar-item has-text-weight-medium" href="#team">Team</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
