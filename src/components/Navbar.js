import React from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom
import Logo from './Logo'
function Navbar() {
  return (
    <header className="sticky z-20 my-10 shadow-lg justify-between flex p-5 space-x-2">
      <Logo />
      <nav className="justify-between space-x-10">
        <Link to="/">Create Student</Link>
        <Link to="/students">Show Students</Link>
      </nav>
    </header>
  );
}

export default Navbar;
