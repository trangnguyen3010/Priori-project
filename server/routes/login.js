const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();
const db = require("../controller/mysqldb");

router.post("/", (req, res) => {
    console.log
    var email = req.body.email;
    var password = req.body.password;
    var errors = [];
    query = `SELECT * FROM user WHERE email='${email}'`;
    if(password.length == 0){
        errors.push({msg: "Please enter a password"});
    }
    if(email.length == 0){
        errors.push({msg: "Please enter an email"});
    }
    if(errors.length > 0){
        res.json(errors);
        return;
    }
    db.query(query, (err, result) => {
        if(err){
            errors.push({msg: err})
            console.log(err)
            res.json(errors); // reject
            return;
        }
        if(result.length == 0){
            errors.push({msg: "Email/password is incorrect or email doesn't exist!"});
            res.json(errors)
            return;
        }
        bcrypt.compare(password, result[0].password, (err, isMatch) => {
            if(err){
                errors.push({msg: err});
                console.log(err);
                res.json(errors);
                return;
            }
            if(isMatch){
                console.log("Successful login")
                res.json(errors);
                return;
            }
            res.json({msg: "Email/password is incorrect or email doesn't exist!"});
            return;
        })

    })
})

module.exports = router;