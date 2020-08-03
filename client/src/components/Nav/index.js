import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div className="nav-wrapper blue Lighten-4">
                <Link to="/" className="brand-logo left">InstaNote</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/signin">Signin</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;