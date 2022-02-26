const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "cmpt370",
    password: "admin"
})

connection.connect((err) => {
    if(err){
        throw err;
    }
    else{
        console.log("DB connected");
    }
})


module.exports = connection;