import React, { useState } from "react";
import Button from "../components/Button";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Signin = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "invalid email" })
            return;
        }
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    M.toast({ html: data.error });
                } else {
                    M.toast({ html: "Sign in success" });
                    history.push("/");
                }
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2>InstaNote</h2>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={PostData}>Sign In</Button>
                <br />
                <Link to="/signup">No account yet? Sign Up.</Link>
            </div>
        </div>
    );
};

export default Signin;