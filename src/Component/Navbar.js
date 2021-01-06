import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleStick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          LOGO
        </Link>

        <div className="menu-icon" onClick={handleStick}>
          <i className={click ? "fas fa-times" : "fa fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Cek Resi
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cekongkir"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Cek Ongkir
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/service" className="nav-links" onClick={closeMobileMenu}>
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/lokasi" className="nav-links" onClick={closeMobileMenu}>
              Lokasi
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/media" className="nav-links" onClick={closeMobileMenu}>
              Media <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <p>Contact Number</p>
            <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
              021-5020-005
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
