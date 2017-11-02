INSERT INTO posts (title, tag, price, description, location, make, model, size, condition, zipcode, email, uid, cat_id, category, image_url)
VALUES (${title}, ${tag}, ${price}, ${description}, ${location}, ${make}, ${model}, ${size}, ${condition}, ${zipcode}, ${email}, ${uid}, ${catId}, ${category}, ${imageUrl});
SELECT * FROM posts
WHERE title = (${title});
