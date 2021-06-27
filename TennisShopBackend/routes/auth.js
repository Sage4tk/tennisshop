const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let router = express.Router();

//models
const adminSchema = require('../models/Admin');

router.route('/')
.post(async (req, res) => {
    console.log(req.body)
    await adminSchema.findOne({ userName: req.body.userName}, async (err, results) => {
        console.log(results)
        if (err) return res.status(500).json({msg: "Something went wrong."});
        if (results === null) return res.json({msg: "User does not exist."});

        await bcrypt.compare(req.body.password, results.password, (error, result) => {
            if (error) return res.status(500).json({msg: "Something went wrong."});
            if (result) {
                const accessToken = jwt.sign({ name: req.body.userName}, process.env.ACCESS_TOKEN);
                return res.status(200).json({
                    jwt: accessToken,
                    msg: "Logged in!"
                });
            }
            return  res.status(400).json({msg: "Password does not match."});
        })
    })
})
.patch(async (req, res) => {
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