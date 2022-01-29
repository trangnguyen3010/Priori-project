const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");



const app = express();
const port = 5000;
const db = require("./controller/mysqldb")

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

app.post("/register", (req, res) => {

    const {email, password, passwordConfirm, name, studentID, school} = req.body;

    

    let err = [];

    if(!email || !password || !passwordConfirm || !name || !studentID || !school){
        err.push({msg: "Please fill in all the required fields"})
    } 
    if(password != passwordConfirm){
        err.push({msg: "Your passwords do not match!"})
    }

    if(err.length > 0){
        // res.json(err)   // send to front end to display
        res.status(422).json(err)
        return;
    }
    // if email already exists

    else{

        console.log("New user registered");
        res.json("Registration complete") // put "OK CODE" here
        // redirect them
        return;
    }

    // console.log(req.body);


})

app.listen(port, () => {console.log(`Server on port ${port}`)})