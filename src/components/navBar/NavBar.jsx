import { Link } from "react-router";
import { IoHome } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { IoCafe } from "react-icons/io5";
import { IoShirt } from "react-icons/io5";
import { GiAlienStare } from "react-icons/gi";
import { SlPicture } from "react-icons/sl";
import { IoSettings } from "react-icons/io5";
import styles from "./NavBar.module.css";
// Removed unused styles import

const NavBar = (props) => {
  return (
    <aside className="bg-white vh-100 position-fixed d-flex flex-column align-items-center w-20">
      <img className="my-4 w-75" src={props.logo} alt="Logo of the Store" />
      <div className={styles.alinhar}>
        <ul className="navbar-nav d-flex flex-column">
          <li>
            <Link to="/Home" className="nav-link text-dark mb-3">
              <IoHome size={30} />
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="nav-link text-dark mb-3">
              <IoCart size={30} />
            </Link>
          </li>
          <li>
            <Link to="/Cup" className="nav-link text-dark mb-3">
              <IoCafe size={30} />
            </Link>
          </li>
          <li>
            <Link to="/Shirt" className="nav-link text-dark mb-3">
              <IoShirt size={30} />
            </Link>
          </li>
          <li>
            <Link to="/Figure" className="nav-link text-dark mb-3">
              <GiAlienStare size={30} />
            </Link>
          </li>
          <li>
            <Link to="/Picture" className="nav-link text-dark mb-3">
              <SlPicture size={30} />
            </Link>
          </li>
        </ul>
      </div>
      <Link
        to="/Settings"
        className="nav-link text-dark align-baseline mt-auto mb-5"
      >
        <IoSettings size={30} />
      </Link>
    </aside>
  );
};

export default NavBar;
