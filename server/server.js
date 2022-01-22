const express = require("express");
const app = express();
const port = 5000;

app.get("/test", (req, res) => {
    res.send("HELLO!");
});


app.listen(port, () => {console.log(`Server on port ${port}`)})