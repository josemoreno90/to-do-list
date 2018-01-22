const express = require('express');
const app = express();
const router = require("./server/router/index")
const bodyParser = require("body-parser")


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

app.listen(3000, () => {
  console.log("Listening Loud and clear!")
})
