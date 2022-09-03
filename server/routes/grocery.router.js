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
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const sql = `
    UPDATE grocery
    SET purchased = true
    where id = $1;
    `;
    pool.query(sql, [id])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log("Error updating specific grocery", error);
            res.sendStatus(500);
        });
});

// DELETE (all)

// DELETE (by id)

module.exports = router;
