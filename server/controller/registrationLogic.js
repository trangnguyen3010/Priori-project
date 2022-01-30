const db = require("../controller/mysqldb");

async function userCheck(data){
    return new Promise((resolve, reject) => {
        const {email, password, passwordConfirm, name, studentID, school} = data;
        var errors = [];

        let query = `SELECT * FROM user WHERE email='${email}'`;
        db.query(query, (err, result) => {
            if(err){
                errors.push({msg: err});
                return reject(errors);
            }
            if(result.length > 0){
                errors.push({msg: "Email already in use!"});
            }
            if(!email || !password || !passwordConfirm || !name || !studentID || !school){
                errors.push({msg: "Please fill in all the required fields!"})
            } 
            if(password != passwordConfirm){
                errors.push({msg: "Your passwords do not match!"})
            }
    
    
            if(errors.length > 0){
                // res.json(errors)   // send to front end to display
                return reject(errors);
            }
        resolve(errors);
        })
    })
}

async function createUser(data){

    var curDate = new Date();
    const {email, password, passwordConfirm, name, studentID, school} = data;
    return new Promise((resolve, reject) => {
        let registeredDate = `${curDate.toLocaleDateString()} - ${curDate.toLocaleTimeString()}`;
        let query = `INSERT INTO user (studentID, email, password, dateReg, school, name)
                     VALUES ('${studentID}', '${email}', '${password}', '${registeredDate}', '${school}', '${name}')`;

        db.query(query, (err, result) => {
            if(err){
                console.log(err.sqlMessage)
                reject(err);
                return;
            }
            resolve("Registration successful");
            return;
        })



    })
}

module.exports = {userCheck, createUser};