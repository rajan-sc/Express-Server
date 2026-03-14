const express = require("express");

const db = require('./utils/db-connection')

const studentRoutes = require('./routes/studentsRoutes')

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello")
})

app.use("/students", studentRoutes)

app.listen(3000);
