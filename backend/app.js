const express = require('express');

const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://ben:testMongo@cluster0.jfquk.mongodb.net/testAng?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected to database');
    })
    .catch(() => {
        console.log("Connection failed");
    })

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use((req, res, next) => {
    console.log('first middleware');
    next();
});

app.use((req, res, next) => {
    res.send('hello from express');
});



module.exports = app;