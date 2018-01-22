const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const router = require()

const todos = require("./models/db/todoFunctions.js")


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
