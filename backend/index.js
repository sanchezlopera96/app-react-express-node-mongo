// importart libraries

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//use methods libs

const app = express();
require('dotenv').config();

//Middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//Database setup

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => { console.log("DB connected")});

//Routes Setup

app.use('/api/category', require('./routes/category'));

//Listen to port

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server execute for port ${port}`);
})
