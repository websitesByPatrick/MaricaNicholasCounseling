import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="/about" className="nav-link">
        About
      </Link>
      <Link href="/services" className="nav-link">
        Services
      </Link>
      <Link href="/contact" className="nav-link">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
