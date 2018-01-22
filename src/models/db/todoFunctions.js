const db = require('./conn')

const listTodos = function() {
  return db.query(`SELECT * FROM todos;`)
}

const createTodo = function(todo) {
  db.query(`INSERT INTO todos(description) VALUES('${description}')`);
}

module.exports = {
  listTodos, createTodo
}
