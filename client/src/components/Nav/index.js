import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div className="nav-wrapper blue Linkghten-4">
                <Link to="/" className="brand-logo left">InstaNote</Link>
                <ul id="nav-mobile" className="right">
                    <Link><a to="/signin">Signin</a></Link>
                    <Link><a to="/signup">Signup</a></Link>
                    <Link><a to="/profile">Profile</a></Link>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;