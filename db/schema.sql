DROP DATABASE chad_app;
CREATE DATABASE chad_app;

\c chad_app;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fname TEXT,
  lname TEXT,
  username TEXT,
  birthday DATE,
  email TEXT,
  profilepic TEXT,
  pass_digest TEXT,
  created TIMESTAMP DEFAULT NOW()
);

CREATE TABLE rooms (
  id SERIAL PRIMARY KEY,
  roomname TEXT,
  interests TEXT,
  location TEXT,
  created TIMESTAMP DEFAULT NOW()
);

