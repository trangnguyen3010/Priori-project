const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.get("/api/test", (req, res) => {
    res.json("testing stuff");
});


app.post("/api/newData", (req, res) => {

    console.log(req.body);
    res.json("Data received");
})

app.listen(port, () => {console.log(`Server on port ${port}`)})