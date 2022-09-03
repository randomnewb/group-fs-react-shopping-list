const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// GET
router.get("/", (req, res) => {
    const sql = `
    SELECT * FROM grocery ORDER BY item;
    `;
    pool.query(sql)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log("Had an issue", error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('In Post request');
    let queryText = `INSERT INTO "grocery" 
                    ("item", "quantity", "unit", "purchased") 
                    VALUES ($1, $2, $3, $4);`
    pool.query(queryText, 
        [req.body.item, req.body.quantity, 
        req.body.unit, req.body.purchased])

.then((result) => {
    res.sendStatus(200);
}).catch((error) => {
    console.log(error);
    res.sendStatus(500);
});
});





module.exports = router;
