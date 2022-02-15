import React from "react"
import { Link, Outlet } from "react-router-dom"

function Nav() {
    return (
        <><header>
            <nav className="nav-bar">
                <ul>
                    <li><Link to="/">
                        Home
                    </Link></li>
                    <li> <Link to="/about">
                        About
                    </Link></li>
                    <li> <Link to="/favorites">
                        Favorites
                    </Link> </li>
                </ul>
            </nav>
        </header><main><Outlet /></main></>
    )


}

export default Nav