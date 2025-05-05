const express = require("express");
const indexfile = require('./router/index');
const bodyParser = require('body-parser')
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = 5000;
// require("dotenv").config();
require("colors");
const mongoose = require("mongoose");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/', indexfile)



app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Handle invalid routes
app.all("*", (req, res) => {
  res.send("Invalid Route");
});


app.listen(PORT, () => {
  console.log("I am live again");
});

const uri = `mongodb+srv://name:password@cluster0.rei7tip.mongodb.net/school_management?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Succesfull")

}).catch((err) => {
  console.log("Error: ", err)
})



