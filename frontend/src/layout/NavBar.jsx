import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { current_user, logout } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-success bg-opacity-50 p-3">
        <div className="container-md">
          {/* Logo Section */}
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="logo"
              className="img-fluid"
              style={{ width: "120px", height: "auto" }}
            />
          </Link>

          {/* Toggler Button for Smaller screen */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Section */}
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/Jobs"
                  className="nav-link active"
                  aria-current="page"
                >
                  JOBS
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Search"
                  className="nav-link active"
                  aria-current="page"
                >
                  SEARCH
                </Link>
              </li>
              
              <li className="nav-item">
                <Link
                  to="/About"
                  className="nav-link active"
                  aria-current="page"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PROFILE
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Profile" className="dropdown-item" href="#">
                      {current_user && current_user.username}
                    </Link>
                  </li>
                  {current_user && (
                    <>
                      <li>
                        <a
                          href="/"
                          className="dropdown-item"
                          onClick={() => logout()}
                        >
                          Logout
                        </a>
                      </li>
                    </>
                  )}
                  <li>
                    <Link to="/Signup" className="dropdown-item" href="#">
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link to="/Login" className="dropdown-item" href="#">
                      Login
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
