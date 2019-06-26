const express = require("express");
const app = express();


app.get("/", (req, res, next) => {
    res.json(["Momo","Lisa","Michael","Ginger","Food"]);
});

app.listen(1098, () => {
    console.log("Server running on port 3000");
});
