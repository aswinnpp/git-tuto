const express = require("express")

const app = express()


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");



app.get("/", (req, res)=>{

    res.render("user/index")
})


app.listen(3000)