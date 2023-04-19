const Table = require('../models/table');
const express = require('express');
const router = express.Router();

// Tables Test Objects in MongoDB

// 6408007f019b5db9eae79afd
    // tableNum: 4
    // contestant1: "2349j230r9j230r"
    // contestant2: "92f3j2039fj0293fj23f"
    // userWhoWon: 0

// Get all Table objects

router.get('/', async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 
    try {
        const tables = await Table.find();
        res.json(tables);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get a specific Table object
router.get('/:tableId', async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Create a new Table object
router.post('/', async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 
    const table = new Table({
        tableNum: req.body.tableNum,
        contestant1: req.body.contestant1,
        contestant2: req.body.contestant2,
        userWhoWon: req.body.userWhoWon,
    });

    try{
        const savedTable = await table.save();
        res.json(savedTable);
    } catch (err) {
        res.json({ message: err });
    }
  
});

// Update a specific Table object
router.patch('/:tableId', async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Delete a specific Table object
router.delete('/:tableId', async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

module.exports = router;