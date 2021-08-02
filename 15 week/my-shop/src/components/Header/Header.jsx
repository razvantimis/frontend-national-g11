import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <div className="header-container">
      <h1>MyLogo</h1>
      <nav>
        <a href="/"><button>Home</button></a>
        <a href="/myCart"><button>MyCart</button></a>
      </nav>
    </div>
  )
}

export default Header;


// 2 link uri 1 logo