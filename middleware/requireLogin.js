const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const mongoose = require('mongoose')
const User = mongoose.model("User")

module.exports = (req, res, next) => {
    const { authorisation } = req.headers;
    if (!authorisation) {
        return res.status(401).json({ err: "you must be logged in" });
    }
    //req.headers contain "Bearer <token>", therefore authorisation === Bearer 12308rho...
    //token extracted from the req.headers
    const token = authorisation.replace("Bearer ", "");
    jwt.verify(token.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ err: "you must be logged in" });
        }
        const { _id } = payload;
        User.findById(id).then(userdata => {
            req.user = userdata;
            next();
        });
    })
}