import { Link } from "react-router";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <aside
      className="bg-white vh-100 position-fixed d-flex flex-column align-items-center"
      style={{ width: "250px", left: "0", top: "0" }}
    >
      <img className="my-4 " src={props.logo} alt="Logo Bazinga Store" />
      <div className="d-flex flex-column">
        <ul className="navbar-nav">
          <li>
            <Link to="/Home" className="nav-link text-dark">
              home
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="nav-link text-dark">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/Cup" className="nav-link text-dark">
              Cup
            </Link>
          </li>
          <li>
            <Link to="/Shirt" className="nav-link text-dark">
              Shirt
            </Link>
          </li>
          <li>
            <Link to="/Figure" className="nav-link text-dark">
              Figure            </Link>
          </li>
          <li>
            <Link to="/Picture" className="nav-link text-dark">
              Picture
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default NavBar;
