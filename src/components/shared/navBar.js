import { NavLink } from "react-router-dom";
import navLogo from "../../img/logo-h.png";
const NavBar = () => {
  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container px-5">
        <NavLink className="navbar-brand" to="/">
          <img src={navLogo} className="img-fluid" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse tm-navigation-dropdown "
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav ml-auto text-center row align-items-center no-gutters ">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-3" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to="/contact-us">
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink aria-current="page" className="nav-link" to="/">
                <button className="btn btn-outline-primary px-4">login</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink aria-current="page" className="nav-link" to="/">
                <button className="btn btn-outline-primary">Register</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
