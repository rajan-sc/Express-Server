const express = require("express");

const app = express();

app.use((req, res, next) =>{
    console.log("First middleware")
    req.user = "Guest";
    console.log(req.user)
    next();
})

app.get("/",(req, res)=>{
    res.send("</h1>Hello!</h1>");
})

app.get("/welcome", (req, res)=>{
    console.log(req.user);
    res.send(`<h1>Welcome, ${req.user}</h1>`)
})


app.listen(3000, ()=>{
    console.log("Server started at port 3000!")
})
