const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('../keys')
//const JWT_SECRET = process.env.JWT_SECRET;
const mongoose = require('mongoose')
const User = mongoose.model("User")
require('dotenv').config();

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ err: "you must be logged in" });
    }
    //req.headers contain "Bearer <token>", therefore authorisation === Bearer 12308rho...
    //token extracted from the req.headers
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ err: "you must be logged in" });
        }
        const { _id } = payload;
        User.findById(_id).then(userdata => {
            req.user = userdata;
            next();
        });
    })
}