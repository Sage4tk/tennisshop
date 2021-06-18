const express = require('express');
const mongoose = require('mongoose');

let router = express.Router();

//middleware
const authToken = require('./authToken');

//models
const postSchema = require('../models/Post');

router.route('/')
.get(async (req, res) => {
    const query = req.body.query

    // send all documents if no query
    if (!query) {
        try {
            const items = await postSchema.find();
            return res.json(items);
        } catch {
            return res.status(500).json({msg: "Something went wrong."})
        }
    }

    try {
        const after = await JSON.parse(JSON.stringify(query))
        const queryItem = await postSchema.find(after)
        
        if (queryItem.length === 0) {
            return res.status(400).json({msg: "This item does not exist"})
        }

        return res.status(200).json(queryItem)
    } catch (err) {
        console.log(err)
        return res.status(500).json({msg: "Something went wrong."})
    }
})
.post(authToken, async (req, res) => {
    try {
        const createPost = new postSchema({
            item: req.body.itemName,
            brand: req.body.brand,
            itemType: req.body.itemType,
            image: req.body.imgUrl,
            stock: req.body.stock
        })

        await createPost.save();
        return res.status(201).json({msg: "Post Created!"})
    } catch {
        return res.status(500).json({msg: "Something went wrong!"})
    }
})

module.exports = router;