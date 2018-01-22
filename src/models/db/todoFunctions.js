const db = require('./conn')

function listTodos() {
  db.query(`SELECT * FROM todos;`)
}

function createTodo(todo) {
  db.query(`INSERT INTO todos(description) VALUES('${description}')`);
}
