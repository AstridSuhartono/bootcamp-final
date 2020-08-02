const router = require("express").Router();
const db = require("../models");

router.get("/allpost", (req, res) => {
    db.Post.find()
        .populate("postedBy", "_id name")
        .then((posts) => {
            res.json({ posts })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post("/createpost", requireLogin, (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.status(422).json({ err: "Please fill in all the fields" });
    };
    req.user.password = undefined;
    const post = new db.Post({
        title,
        body,
        postedBy: req.user
    });
    post.save().then(result => {
        res.json({ post: result });
    })
        .catch(err => {
            console.log(err);
        });
});

router.get('/mypost', requireLogin, (req, res) => {
    db.Post.find({ postedBy: req.user._id })
        .populate("PostedBy", "_id name")
        .then(mypost => {
            res.json({ mypost })
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;