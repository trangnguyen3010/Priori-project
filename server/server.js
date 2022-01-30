const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");



const app = express();
const port = 5000;
const db = require("./controller/mysqldb")

const registerRoute = require("./routes/register");

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

app.use("/register", registerRoute);


app.listen(port, () => {console.log(`Server on port ${port}`)})