INSERT INTO users (email, uid)
VALUES ($1, $2);
SELECT * FROM users
WHERE email = ($1);
