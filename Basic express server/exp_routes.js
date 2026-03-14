const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("At first middleware");
    next()
})

app.get("/orders", (req,res)=>{
    res.send('<h1>Here is the list of orders.</h1>');
})

app.get("/", (req,res)=>{
    res.send('<h1>HOME</h1>');
})

app.post("/orders",(req,res)=>{
    res.send({"Description":'A new list of orders has been created.'})
})

app.get("/users",(req,res)=>{
    res.send('<h1>Here is the list of all users</h1>')
})
app.post("/users",(req,res)=>{
    res.send({"Description":'A new user has been added.'})
})

app.listen(3000,()=>{
    console.log("Server started on port 3000!")
})
