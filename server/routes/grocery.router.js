const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "grocery"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

//router.post 

router.post('/', (req, res) => {
    console.log('In Post request');
    let queryText = `INSERT INTO "grocery" 
                    ("item", "quantity", "unit", "purchased") 
                    VALUES ($1, $2, $3, $4);`
    pool.query(queryText, 
        [req.body.item, req.body.quantity, 
        req.body.unit, req.body.purchased])
}).then((result) => {
    res.sendStatus(200);
}).catch((error) => {
    console.log(error);
    res.sendStatus(500);
});










module.exports = router;
