const mysql = require("mysql2")

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

    const usersTable = `create table if not exists users(
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

    const busesTable = `create table if not exists buses(
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

    const bookingTable = `create table if not exists booking(
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

    const paymentsTable = `create table if not exists payments(
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

module.exports = connection;
