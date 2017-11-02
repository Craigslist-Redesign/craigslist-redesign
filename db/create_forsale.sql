INSERT INTO posts (title, tag, price, description, location, make, model, size, condition, zipcode, email, uid, cat_id, category, image_Url)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);
SELECT * FROM posts
WHERE title = ($1);
