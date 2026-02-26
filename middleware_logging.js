const express = require('express')
const app = express()

// middleware 
app.use((req,res,next)=>{
    const http_methds = req.method
    const endpnt = req.url
    console.log(`${endpnt} request made to ${http_methds}`)
    next()
})
/* Works exactly like a securite guard at mall
He knows which door you enter (url)
Your purpose (methods)

so it logs it before you go inside
*/


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
