const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let router = express.Router();

//models
const adminSchema = require('../models/Admin');
const { create } = require('../models/Admin');

router.route('/')
.post(async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const createAdmin = new adminSchema({
            userName: req.body.userName,
            password: hashedPassword
        });

        await createAdmin.save();

        return res.status(200).json({msg: "user has been created"});
    } catch {
        return res.status(500).json({msg: "Something went wrong!"});
    }
    
})

module.exports = router;