import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2>InstaNote</h2>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />
                <Button>Sign Up</Button>
                <br/>
                <Link to="/signin">Have an account? Sign In.</Link>
            </div>
        </div>
    );
};

export default Signup;