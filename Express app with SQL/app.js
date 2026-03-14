const express = require("express");
const mysql = require("mysql2")

const app = express();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: "rajan0608",
    database: "testDB"

})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection created!")

    const usersTable = `create table users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(50)
    )`

    connection.execute(usersTable, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Users table is created")
    })

    const busesTable = `create table buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT,
    totalSeats INT,
    availableSeats INT
    )`

    connection.execute(busesTable, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log(" Bus table is created")
    })

    const bookingTable = `create table booking(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
    )`

    connection.execute(bookingTable, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log(" Booking table is created")
    })

    const paymentsTable = `create table payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT,
    paymentStatus varchar(50)
    )`

    connection.execute(paymentsTable, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log(" Booking table is created")
    })

})

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(3000);
