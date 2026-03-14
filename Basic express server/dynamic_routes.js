const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Home</h1>")
})


app.get("/welcome/:username",(req,res)=>{
    const u_name = req.params.username;
    const age = req.query.age;
    const role = req.query.role
    res.send(`<h1>Welcome ${u_name} and you are ${role} age ${age}.</h1>`)
})


app.use((req,res)=>{
    res.status(404).send("<h1>404-Page Not Found</h1>")
})


app.listen(4000,()=>{
    console.log("Server started on port 4000!")
})
