import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { current_user, logout } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success bg-opacity-50 p-4 ">
        <div className="container">
          <Link to="/" className="navbar-brand fst-italic ">
            AfriDEV
          </Link>
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
          <div
            className="collapse navbar-collapse d-flex justify-content-end "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  JOBS
                </Link>
                <ul className="dropdown-menu">
                  <>
                    <li>
                      <Link to="Jobs" className="dropdown-item" href="#">
                        Jobs
                      </Link>
                    </li>
                    <li>
                      <Link to="AddJob" className="dropdown-item" href="#">
                        Add Job
                      </Link>
                    </li>
                  </>
                </ul>
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
              <li className="nav-item">
                <Link to="/Contact" className="nav-link active">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Search" className="nav-link active">
                  SEARCH
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
                    {current_user &&
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
                    }
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
