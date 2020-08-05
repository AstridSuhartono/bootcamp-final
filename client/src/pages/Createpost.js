import React, { useState } from "react";
import Button from "../components/Button";
import M from "materialize-css";
import { useHistory } from 'react-router-dom'

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const history = useHistory();

    const postDetails = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "instanote");
        data.append("cloud_name", "bootcamp-instanote");
        fetch("https://api.cloudinary.com/v1_1/bootcamp-instanote/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => { setUrlImage(data.url) })
            .catch(err => { console.log(err) });
        fetch("/createpost", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                title,
                body,
                picture: urlImage
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    M.toast({ html: data.error });
                } else {
                    M.toast({ html: "New post successfully added" });
                    history.push("/");
                }
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="card post-card input-field">
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
            <div className="file-field input-field">
                <div className="btn">
                    <span>Image</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <Button onClick={postDetails}>Submit Post</Button>
        </div>
    )
}

export default CreatePost;