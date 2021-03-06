const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

dotenv.config();

//middleware
app.use(cors());
app.use(express.json({ limit: '2MB' }));
app.use(express.urlencoded({ extended: false }));

//database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Connected to database')
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

//import routes
const auth = require('./routes/auth');
const postItem = require('./routes/postItem');

app.get('/', (req, res) => {
    res.send("All good!");
})

//routes
app.use('/auth', auth);
app.use('/q', postItem);

app.listen(4000, ()=> {
    console.log('Server is running at port 4000')
})