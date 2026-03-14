const connection = require('../utils/db-connection');
const db = require('../utils/db-connection')
const addEntries = (req,res)=>{
    const {email, name} = req.body;
    const insertQuery = `INSERT INTO users (email, name) VALUES (?,?)`;

    db.execute(insertQuery, [email, name], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            db.end();
            return;
        }

        console.log("Value has been inserted.")
        res.status(200).send(`user with name ${name} sucesfully added.`)
    })
}
const updateEntry = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const updateQuery = `UPDATE users set name= ? where id = ?`;

    db.execute(updateQuery, [name, id], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            db.end();
            return;
        }

        if(result.affectedRows === 0){
            res.status(404).send("User not found");
            return;
        }

        res.status(200).send(`user updated.`)
    })
}

const deleteEntry = (req,res)=>{
    const {id} = req.params;
    const deleteQuery = `DELETE FROM users WHERE id = ?`;

    db.execute(deleteQuery, [id], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            db.end();
            return;
        }

        if(result.affectedRows === 0){
            res.status(404).send("User not found");
            return;
        }

        res.status(200).send(`user deleted.`)
    })
}


module.exports = {addEntries,
    updateEntry,
    deleteEntry
};
