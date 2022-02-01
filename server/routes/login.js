const express = require("express");

const jwt = require("jsonwebtoken");

const router = express.Router();
const db = require("../controller/mysqldb");

const loginLogic = require("../controller/loginLogic");



router.get("/test", loginLogic.verifyToken, (req, res) => {
    // console.log("Hi, you're in");
    res.json("Hi you're in test route of login rn");
})

router.post("/", (req, res) => {
    loginLogic.userCheck(req.body)
    .then(resolve => {

        const user = {
            name: resolve.name,
            studentID: resolve.studentID,
            school: resolve.school,
            email: resolve.email
        }
        jwt.sign({user}, "superSecretKey", (err, token) => {

            res.status(200).json(token);
            return;
        })


    })
    .catch(reject => {
        res.status(422).json(reject);
    })


})

module.exports = router;