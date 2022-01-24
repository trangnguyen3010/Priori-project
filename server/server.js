// const express = require("express");
// const bodyparser = require("body-parser");
// const app = express();
// const port = 5000;

// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());




// app.get("/api/test", (req, res) => {
//     res.json("testing stuff");
// });


// app.post("/api/newData", (req, res) => {

//     console.log(req.body);
//     res.json("Data received");
// })

//https://github.com/machadop1407/Authentication/blob/master/server/index.js

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
const port = 8000;


app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:8000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "mysql",
  password: "admin",
  database: "cmpt370",
});


app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM login WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.listen(port, () => {console.log(`Server on port ${port}`)})