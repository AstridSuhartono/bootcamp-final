import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2>InstaNote</h2>
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />
                <Button>Sign In</Button>
                <br/>
                <Link to="/signup">No account yet? Sign Up.</Link>
            </div>
        </div>
    );
};

export default Signin;