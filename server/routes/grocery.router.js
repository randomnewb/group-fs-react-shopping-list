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


// PUT (all)
router.put('/', (req, res) => {
    console.log('in PUT /grocery - Reset all purchased status')
    const queryText =   `UPDATE "grocery"
                        SET "purchased" = false
                        WHERE "purchased" = true;`;
    pool.query(queryText).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    });
});


// DELETE (all)
router.delete('/', (req, res) => {
    console.log('in DELETE /grocery - Clear all');
    const queryText = 'DELETE FROM "grocery";';
    pool.query(queryText).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    });
});


module.exports = router;
