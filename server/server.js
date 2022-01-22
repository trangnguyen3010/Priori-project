const express = require("express");
const app = express();
const port = 5000;

app.get("/api/test", (req, res) => {
    res.json("testing stuff");
});


app.listen(port, () => {console.log(`Server on port ${port}`)})