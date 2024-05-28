import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/import">Import</Link></li>
        <li><Link to="/convert">Convert</Link></li>
        <li><Link to="/export">Export</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
