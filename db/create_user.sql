INSERT INTO users (email)
VALUES ($1);
SELECT * FROM users
WHERE email = ($1);
