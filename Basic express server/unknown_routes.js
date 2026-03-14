const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Home</h1>")
})


app.get("/products",(req,res)=>{
    res.send("<h1>Here is the list of all the products.</h1>")
})
app.post("/products",(req,res)=>{
    res.send("<h1>Here is the list of all the products.</h1>")
})
app.get("/categories",(req,res)=>{
    res.send("<h1>Here is the list of all the categories.</h1>")
})
app.post("/categories",(req,res)=>{
    res.send("<h1>New category created.</h1>")
})


app.use((req,res)=>{
    res.status(404).send("<h1>404-Page Not Found</h1>")
})


app.listen(4000,()=>{
    console.log("Server started on port 4000!")
})
