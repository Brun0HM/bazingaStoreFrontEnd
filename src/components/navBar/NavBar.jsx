import React, { useState } from "react";
import { Link } from "react-router";
import { IoHome, IoCart, IoCafe, IoShirt, IoSettings } from "react-icons/io5";
import { GiAlienStare } from "react-icons/gi";
// Removed unused import
import { RiBrushFill } from "react-icons/ri";
// Removed unused import
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Button to open the menu on mobile */}
      <div
        className={`d-md-none position-fixed`}
        style={{ top: "10px", left: "15px", zIndex: 1100 }}
      >
        <button
          className="btn p-0 border-0 bg-transparent"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className="hamburger-icon">
            <img src={props.logo} alt="" width={"50px"} />
          </div>
        </button>
      </div>

      {/* Menu Lateral */}
      <aside
        className={`bg-white vh-100 position-fixed d-flex flex-column align-items-center ${
          isMenuOpen ? "d-flex" : "d-none"
        } d-md-flex`}
        style={{
          left: isMenuOpen ? "0" : "-250px", // Hides the menu on mobile
          top: "0",
          width: "80px", // Small menu on desktop
          // Smooth transition
          zIndex: 1050,
        }}
      >
        <div className="d-flex flex-column align-items-center">
          <ul className="mt-5 pt-2 nav flex-column text-center">
            <li className="nav-item">
              <Link to="/Home" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <IoHome size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Cart" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <IoCart size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Cup" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <IoCafe size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Shirt" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <IoShirt size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Figure" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <GiAlienStare size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Picture" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <RiBrushFill size={30} />
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="/Settings"
          className={`nav-link text-dark align-baseline mt-auto mb-5 ${styles.efeito}`}
        >
          <IoSettings size={30} />
        </Link>
      </aside>

      {/* Button to open the menu on desktop */}
      <aside
        className={`d-none d-md-flex bg-white min-vh-100 flex-column align-items-center col-1`}
      >
        <div className="d-flex flex-column align-items-center">
          <img
            className="my-4"
            src={props.logo}
            alt="Logo Bazinga Store"
            style={{ maxWidth: "50px" }}
          />
          <ul className="nav flex-column text-center">
            <li className="nav-item">
              <Link to="/Home" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <IoHome size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Cart" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <IoCart size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Cup" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <IoCafe size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Shirt" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <IoShirt size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Figure" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <GiAlienStare size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Picture" className={`nav-link text-dark mb-3 ${styles.efeito}`}>
                <RiBrushFill size={30} />
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="/Settings"
          className={`nav-link text-dark align-baseline mt-auto mb-5 ${styles.efeito}`}
        >
          <IoSettings size={30} />
        </Link>
      </aside>
    </>
  );
};

export default NavBar;
