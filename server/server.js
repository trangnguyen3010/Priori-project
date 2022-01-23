const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");



const app = express();
const port = 5000;
const con = require("./controller/mysqldb")

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

app.get("/api/test", (req, res) => {
    res.json("testing stuff");
});


app.post("/api/newData", (req, res) => {

    console.log(req.body);
    res.json("Data received");
    
    
})


app.post("/register", (req, res) => {

    const {email, password, passwordConfirm, name, studentID, school} = req.body;
    let err = [];

    if(!email || !password || !passwordConfirm || !name || !studentID || !school){
        console.log("Missing field");
        err.push({msg: "Please fill in all the required fields"})
    } 
    
    // console.log(req.body);



    res.json("Data received");
})

app.listen(port, () => {console.log(`Server on port ${port}`)})