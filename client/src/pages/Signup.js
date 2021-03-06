import React, { useState } from "react";
import Button from "../components/Button";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
//import axios from 'axios'

const Signup = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "invalid email" })
            return;
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email
            })
        })
            .then(res => res.json())
            .then((data) => {
                if (data.error) {
                    M.toast({ html: data.error });
                } else {
                    M.toast({ html: data.message });
                    history.push("/signin");
                }
            }).catch(err => {
                console.log(err);
            })
    }

    // const PostData = () => {
    //     axios.post("/signup", {
    //         name,
    //         password,
    //         email
    //     })
    //         .then((res) => {
    //             console.log(res);
    //             if (res.error) {
    //                 M.toast({ html: res.error });
    //             } else {
    //                 M.toast({ html: res.message });
    //                 history.push("/signin");
    //             }
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }

    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2>InstaNote</h2>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={PostData}>Sign Up</Button>
                <br />
                <Link to="/signin">Have an account? Sign In.</Link>
            </div>
        </div>
    );
};

export default Signup;