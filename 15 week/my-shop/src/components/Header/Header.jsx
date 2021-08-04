import React from 'react';
import './Header.css';
import {
  Link
} from "react-router-dom";

const Header = () => {

  return (
    <div className="header-container">
      <h1>MyLogo</h1>
      <nav>
        <Link to="/"><button>Home</button></Link>
        <Link to="/myCart"><button>MyCart</button></Link>
      </nav>
    </div>
  )
}

export default Header;


// 2 link uri 1 logo