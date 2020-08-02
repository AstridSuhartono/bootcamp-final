const router = require("express").Router();
const db = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const requireLogin = require("../middleware/requireLogin");

router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json({ err: "Please fill all the fields" });
    };
    db.User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ err: "another user already exists with that email" });
            };
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new db.User({
                        name,
                        email,
                        password: hashedpassword
                    });
                });
            user.save()
                .then(user => {
                    res.json({ message: "saved successfully" });
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
        });
});

router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ err: "Email or password cannot be empty" });
    };
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ err: "Invalid email or password" });
            };
            bcrypt.compare(password, savedUser.password)
                .then(isMatch => {
                    if (isMatch) {
                        //res.json({ message: "successfully signed in" });
                        const token = jwt.sign({_id:savedUser._id}, JWT_SECRET);
                        res.json({token});
                    } else {
                        return res.status(422).json({ err: "Invalid email or password" });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        })
});

module.exports = router;
