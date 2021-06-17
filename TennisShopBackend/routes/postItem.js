const express = require('express');

let router = express.Router();

//middleware
const authToken = require('./authToken');

router.route('/')
.post(authToken, (req, res) => {
    res.send('success')
})

module.exports = router;