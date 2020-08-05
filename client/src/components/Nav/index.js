import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../App"

const Nav = () => {
    const { state, dispatch } = useContext(UserContext);
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create Post</Link></li>
            ]
        } else {
            return [
                <li><Link to="/signin">Signin</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
            ]
        }
    }
    return (
        <nav>
            <div className="nav-wrapper blue Lighten-4">
                <Link to={state?"/":"/signin"} className="brand-logo left">InstaNote</Link>
                <ul id="nav-mobile" className="right">
                    {renderList()}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;