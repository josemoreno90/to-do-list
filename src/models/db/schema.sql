DROP TABLE IF EXISTS todos;

CREATE TABLE todos(
  id SERIAL PRIMARY KEY,
  description TEXT,
  status BOOLEAN
);
