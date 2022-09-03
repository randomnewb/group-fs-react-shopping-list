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

// POST

// PUT (all)

// PUT (by id)

// DELETE (all)

// DELETE (by id)

module.exports = router;
