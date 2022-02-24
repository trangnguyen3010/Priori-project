const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const session = require("express-session");


const app = express();
const port = 5000;
const db = require("./controller/mysqldb");

const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
app.use(session({
    name: "sid",
    resave: false,
    saveUninitialized: false,
    secret: "aaaaaa",
    cookie: {
        maxAge: 7200000, // 2 hours
        sameSite: true,
        httpOnly: true
    }
}))


app.use("/register", registerRoute);
app.use("/login", loginRoute);


app.listen(port, () => {console.log(`Server on port ${port}`)})