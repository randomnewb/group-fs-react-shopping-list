const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

<<<<<<< HEAD
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
    let queryText = 
})









=======
// GET

// POST

// PUT (all)

// PUT (by id)

// DELETE (all)

// DELETE (by id)
>>>>>>> 9e40842dc99a6547c985f69e893ecc5b22270408

module.exports = router;
