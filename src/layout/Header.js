import { useEffect, useState } from "react";
import { GrTarget } from "react-icons/gr";
import { useLocation } from "react-router-dom";

function Header() {
  const [path, setPath] = useState();

  const location = useLocation();

  useEffect(() => {
    location.pathname === "/"
      ? setPath(1)
      : location.pathname === "/home"
      ? setPath(1)
      : location.pathname === "/users"
      ? setPath(2)
      : setPath(0);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <GrTarget /> jsonplaceholder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item border-end">
              <a
                className={`nav-link ${path === 1 ? "active" : ""}`}
                aria-current="page"
                href="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${path === 2 ? "active" : ""}`}
                href="/users"
              >
                Users
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
