DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;

CREATE TABLE IF NOT EXISTS personality (
  personality_id INT AUTO_INCREMENT PRIMARY KEY,
  personality_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  personality_id INT,
  FOREIGN KEY (personality_id) REFERENCES personality(personality_id),
);