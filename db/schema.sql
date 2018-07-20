DROP DATABASE chad_app;
CREATE DATABASE chad_app;

\c chad_app;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fname TEXT,
  lname TEXT,
  fullname TEXT,
  username TEXT,
  birthday DATE,
  email TEXT,
  profilepic TEXT,
  pass_digest TEXT,
  account_type TEXT DEFAULT 'user',
  created TIMESTAMP DEFAULT NOW()
);

CREATE TABLE rooms (
  id SERIAL PRIMARY KEY,
  roomname TEXT,
  interests TEXT,
  location TEXT,
  created TIMESTAMP DEFAULT NOW()
);

CREATE TABLE interests (
  id SERIAL PRIMARY KEY,
  label TEXT
);

CREATE TABLE userinterests (
  id SERIAL PRIMARY KEY,
  userid INTEGER REFERENCES users(id),
  interestid INTEGER REFERENCES interests(id)
);

INSERT INTO interests (label)
VALUES
('Music'),
('Clothes'),
('Investing'),
('Technology'),
('Sports'),
('Love'),
('Travelling'),
('Beer'),
('Computers'),
('Netflix'),
('Dancing'),
('Religion'),
('Apple'),
('Drake');

