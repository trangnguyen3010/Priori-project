const db = require("../controller/mysqldb");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function userCheck(data){

    return new Promise((resolve, reject) => {
        // console.log(data)
        var email = data.email;
        var password = data.password;
        var errors = [];
        if(password.length == 0){
            errors.push({msg: "Please enter a password"});
        }
        if(email.length == 0){
            errors.push({msg: "Please enter an email"});
        }
        if(errors.length > 0){
            reject(errors);
            return;
        }
        
        query = `SELECT * FROM user WHERE email='${email}'`;
        db.query(query, (err, result) => {
            if(err){
                errors.push({msg: err})
                console.log(err)
                reject(errors);
            }
            if(result.length == 0){
                errors.push({msg: "Email/password is incorrect or email doesn't exist!"});
                reject(errors)
                return;
            }
            bcrypt.compare(password, result[0].password, (err, isMatch) => {
                if(err){
                    errors.push({msg: err});
                    console.log(err);
                    reject(errors);
                    return;
                }
                if(isMatch){
                    // console.log("Successful login, displaying errors:", errors);
                    resolve(result[0]);
                    return;
                }
                reject([{msg: "Email/password is incorrect or email doesn't exist!"}]);
                return;
            })
        })

    })
}

function verifyToken(req, res, next){
    // console.log("Verifying token");
    const authHeader = req.headers.authorization;
    // console.log(authHeader);
    if(authHeader){
        const token = authHeader.split(" ")[1];
        // console.log("token", token);
        jwt.verify(token, "superSecretKey", (err, user) => {
            if(err){
                res.status(403).json([{msg: "Token not valid!"}]);
                return;
            }

            req.user = user;
            next();

        })
    }
    else{
        // console.log("Not authenticated");
        res.status(401).json([{msg: "You are not authenticated!"}]);
    }
}


module.exports = {userCheck, verifyToken};