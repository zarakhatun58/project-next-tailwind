import Link from "next/link";
import React from "react";
import logo from "../../Assets/images/logo.png";
import Image from "next/image";
import "./Styles.css";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-[#283F59] text-white nav-content">
      <div className="flex items-center ml-4">
        <Link href="/">
          <Image src={logo} alt="My Image" className="logo" priority={true} />
        </Link>
      </div>
      <nav className="mr-4">
        <ul className="flex space-x-4">
          <li className="navbar-item">
            <Link href="/home">
              <p className="p-1">Pricing</p>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/about">
              <p className="p-1">Documentation</p>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/services">
              <p className="p-1">FAQ</p>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/contact">
              <p className="p-1">Contact</p>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/contact">
              <p className="p-1">Blog</p>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/contact">
              <p className="p-1">Status</p>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/contact">
              <p className="p-1">Dashboard</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
