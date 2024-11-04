CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Insert a new user
INSERT INTO users (email, password) VALUES (?, ?);

-- Retrieve all users
SELECT * FROM users;

-- Retrieve a single user by ID
SELECT * FROM users WHERE id = ?;

-- Update a user
UPDATE users SET email = ?, password = ? WHERE id = ?;

-- Delete a user
DELETE FROM users WHERE id = ?;
