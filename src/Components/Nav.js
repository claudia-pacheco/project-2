import React from "react";
import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/races">Races</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/classes">Classes</Link>{" "}
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
