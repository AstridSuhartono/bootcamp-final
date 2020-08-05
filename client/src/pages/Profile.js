import React from "react";

const Profile = () => {
    return (
        <div style={{ maxWidth: "640px", margin: "0px auto" }}>
            <div style={{ display: "flex", justifyContent: "space-around", margin: "10px", borderBottom: "1px solid black" }}>
                <div>
                    <img style={{ width: "140px", height: "140px", borderRadius: "70px", padding: "5px" }}
                        src="https://images.unsplash.com/photo-1522196772883-393d879eb14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1182&q=80"
                    />
                </div>
                <div>
                    <h4>Astrid Suhartono</h4>
                    <div style={{ justifyContent: "space-between" }}>
                        <h5>astrid@mail.com</h5>
                        <h5>3 posts</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                <img className="item" src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                <img className="item" src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />

            </div>
        </div>
    );
};

export default Profile;