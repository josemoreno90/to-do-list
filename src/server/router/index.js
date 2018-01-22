const router = require('express').Router();
const todos = require("../../models/db/todoFunctions.js")



router.get('/', (req,res) => {
  console.log("Here")
  todos.listTodos()
  .then(todos => {
    res.render("index", {todos})
  })
})

module.exports = router;
